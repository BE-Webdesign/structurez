function Node( data ) {
	return {
		data: data,
		next: null,
	};
}

function SingleLinkedList() {
	var head = null, tail = null, length = 0;

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
			var node = Node( data );

			// First addition.
			if ( ! head && ! tail ) {
				head = node;
				tail = node;
			// Any other addition.
			} else {
				head.next = node;
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
			var node = Node( data );

			// First addition.
			if ( ! head ) {
				head = node;
				tail = node;
			// Any other addition.
			} else {
				head.next = head;
				head      = node;
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
		 */
		traverse: function( fn ) {
			var current = head;

			while ( current ) {
				fn( current );

				current = this.head.next;
			}
		}
	}
}

export default SingleLinkedList
