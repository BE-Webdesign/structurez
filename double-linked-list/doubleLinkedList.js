function Node( data ) {
	return {
		data: data,
		// Next node in the list.
		next: null,
		// Previous node in the list.
		prev: null,
	};
}

function DoubleLinkedList() {
	/**
	 * head is the first node in the list, tail is the last, and length is how
	 * many nodes the list contains.
	 *
	 * Each node is just some object that will contain a value stored in a data
	 * property.
	 */
	let head = null, tail = null, length = 0;

	/**
	 * Function for traversing the nodes in the list.
	 *
	 * Pass in a function that as its arguments will take one node. The function
	 * will be called each time until the list runs out or until the function,
	 * returns null. By returning null you short circuit the evaluation, this is
	 * useful for various performance tweaks where you can stop at a particular
	 * node.
	 *
	 * @param {function} fn Function to call on every node.
	 */
	const traverseList = ( start, next ) => ( fn ) => {
		let current = start();

		while ( current ) {
			// Store the result for short circuit evaluation.
			var result = fn( current );

			// If a null result is found break out of traversal.
			if ( null === result ) {
				return;
			}

			current = current[ next ];
		}
	}

	const getHead = () => head;
	const getTail = () => tail;

	const traverseForwards  = traverseList( getHead, 'next' );
	const traverseBackwards = traverseList( getTail, 'prev' );

	return {
		/**
		 * Function for traversing the nodes in the list.
		 *
		 * The function passed in as an argument should take a node as its only
		 * argument. This is not particularly useful for finding
		 *
		 * @param {any} data Whatever value the node should hold.
		 * @return {Object} returns the node appened to the list.
		 */
		append: function( data ) {
			const node = Node( data );

			// First addition.
			if ( ! head && ! tail ) {
				head = node;
				tail = node;
			// Any other addition.
			} else {
				node.prev = tail;
				tail.next = node;
				tail      = node;
			}

			length++;

			return node;
		},

		/**
		 * Function for traversing the nodes in the list.
		 *
		 * The function passed in as an argument should take a node as its only
		 * argument. This is not particularly useful for finding
		 *
		 * @param {any} data Whatever value the node should hold.
		 * @return {Object} returns the node appened to the list.
		 */
		prepend: function( data ) {
			const node = Node( data );

			// First addition.
			if ( ! head ) {
				head = node;
				tail = node;
			// Any other addition.
			} else {
				head.prev = node;
				node.next = head;
				head      = node;
			}

			length++;

			return node;
		},

		/**
		 * Function for traversing the nodes in the list from head to tail.
		 *
		 * @see traverseList above for more documentation.
		 *
		 * @param {function} fn Function to call on every node.
		 */
		traverse: traverseForwards,

		/**
		 * Function for traversing the nodes in the list from tail to head.
		 *
		 * @see traverseList above for more documentation.
		 *
		 * @param {function} fn Function to call on every node.
		 */
		reverse: traverseBackwards,

		/**
		 * Outputs the linked list into a native array.
		 *
		 * @return {array} Array representation of the single linked list.
		 */
		intoArray: function() {
			const array = [];

			traverseForwards( ( item ) => array.push( item.data ) );

			return array;
		},

		/**
		 * Outputs the sequence of the list from head to tail as a string.
		 *
		 * @return {string} String representation of the single linked list.
		 */
		print: function() {
			const array = [];

			traverseForwards( ( item ) => array.push( JSON.stringify( item.data ) ) );

			return array.join( ' ' );
		},

		/**
		 * Return length of the list.
		 *
		 * @return {int} Returns the length of the list.
		 */
		length: function() {
			return length;
		}
	}
}

export default DoubleLinkedList
