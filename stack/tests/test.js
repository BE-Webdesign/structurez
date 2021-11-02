import Stack from '../stack';

describe( 'Stack', () => {
	describe( 'push', () => {
		test( 'adding a single item', () => {
			const stack = Stack();

			const item = stack.push( 1 );

			expect( item ).toEqual( 1 );
			expect( stack.size() ).toEqual( 1 );
		} );
	} );

	describe( 'pop', () => {
		test( 'adding a single item and removing it', () => {
			const stack = Stack();

			stack.push(1);

			const item = stack.pop();

			expect( item ).toEqual( 1 );
			expect( stack.size() ).toEqual( 0 );
		} );

		test( 'adding multiple items and removing the last item added', () => {
			const stack = Stack();

			stack.push(1);
			stack.push(2);
			stack.push(3);

			const item = stack.pop();

			expect( item ).toEqual( 3 );
			expect( stack.size() ).toEqual( 2 );
		} );
	} );

	describe( 'length', () => {
		test( 'adding a three items and verifying length', () => {
			const stack = Stack();

			stack.push( 1 );
			stack.push( 2 );
			stack.push( 3 );

			expect( stack.size() ).toEqual( 3 );
		} );
	} );
} );
