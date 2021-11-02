function Stack () {
	const sequence = [];

	return {
		/**
		 * Add an item to the stack.
		 *
		 * @param {any} data Whatever value the stack should hold.
		 * @return {any} Returns the data passed in.
		 */
		push: function( data ) {
			sequence.push( data );

			return data;
		},

		/**
		 * Remove the last added item from the stack.
		 *
		 * @return {any} Returns the data last passed in.
		 */
		pop: function() {
			return sequence.pop();
		},

		/**
		 * Returns the size of the stack.
		 *
		 * @return {Number} Size of the stack.
		 */
		size: function() {
			return sequence.length;
		}
	};
}

export default Stack;
