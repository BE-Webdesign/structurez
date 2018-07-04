import SingleLinkedList from '../SingleLinkedList';

describe( 'SingleLinkedList', () => {
	describe( 'append', () => {
		test( 'adding a single node', () => {
			const list = SingleLinkedList();

			expect( list.append( 1 ) ).toEqual( { data: 1, next: null } );
		} );

		test( 'adding two nodes', () => {
			const list = SingleLinkedList();

			const node1 = list.append( 1 );
			const node2 = list.append( 2 );

			expect( node1 ).toEqual( { data: 1, next: node2 } );
			expect( node2 ).toEqual( { data: 2, next: null } );
		} );
	} );

	describe( 'prepend', () => {
		test( 'adding a single node', () => {
			const list = SingleLinkedList();

			expect( list.prepend( 1 ) ).toEqual( { data: 1, next: null } );
		} );

		test( 'adding two nodes', () => {
			const list = SingleLinkedList();

			const node1 = list.prepend( 1 );
			const node2 = list.prepend( 2 );

			expect( node1 ).toEqual( { data: 1, next: null } );
			expect( node2 ).toEqual( { data: 2, next: node1 } );
		} );
	} );

	describe( 'length', () => {
		test( 'empty list', () => {
			const list = SingleLinkedList();

			expect( list.length() ).toEqual( 0 );
		} );

		test( 'adding two nodes', () => {
			const list = SingleLinkedList();

			const node1 = list.append( 1 );

			expect( list.length() ).toEqual( 1 );
		} );
	} );

	describe( 'traverse', () => {
		test( 'shortcircuit evaluation to find node', () => {
			const list = SingleLinkedList();

			const node = list.append( 1 );

			let result = null;

			list.traverse( ( item ) => {
				if ( item.data === 1 ) {
					result = item;
					return null;
				}

				return undefined;
			} )

			expect( node ).toEqual( result );
		} );
	} );

	describe( 'intoArray', () => {
		test( 'build list of three nodes', () => {
			const list = SingleLinkedList();

			list.append( 1 );
			list.append( 2 );
			list.append( 3 );

			const array = list.intoArray();

			expect( array ).toEqual( [ 1, 2, 3 ] );
		} );
	} );

	describe( 'print', () => {
		test( 'print list of four nodes of various types', () => {
			const list = SingleLinkedList();

			list.append( 1 );
			list.append( 'two' );
			list.append( [ 3 ] );
			list.append( { four: 4 } );

			const string = list.print();

			expect( string ).toEqual( '1 \"two\" [3] {\"four\":4}' );
		} );
	} );
} );
