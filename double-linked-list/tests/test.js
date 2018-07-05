import DoubleLinkedList from '../doubleLinkedList';

describe( 'DoubleLinkedList', () => {
	describe( 'append', () => {
		test( 'adding a single node', () => {
			const list = DoubleLinkedList();

			expect( list.append( 1 ) ).toEqual( { data: 1, next: null, prev: null } );
		} );

		test( 'adding two nodes', () => {
			const list = DoubleLinkedList();

			const node1 = list.append( 1 );
			const node2 = list.append( 2 );

			expect( node1 ).toEqual( { data: 1, next: node2, prev: null } );
			expect( node2 ).toEqual( { data: 2, next: null, prev: node1 } );
		} );
	} );

	describe( 'prepend', () => {
		test( 'adding a single node', () => {
			const list = DoubleLinkedList();

			expect( list.prepend( 1 ) ).toEqual( { data: 1, next: null, prev: null } );
		} );

		test( 'adding two nodes', () => {
			const list = DoubleLinkedList();

			const node1 = list.prepend( 1 );
			const node2 = list.prepend( 2 );

			expect( node1 ).toEqual( { data: 1, next: null, prev: node2 } );
			expect( node2 ).toEqual( { data: 2, next: node1, prev: null } );
		} );
	} );

	describe( 'length', () => {
		test( 'empty list', () => {
			const list = DoubleLinkedList();

			expect( list.length() ).toEqual( 0 );
		} );

		test( 'adding two nodes', () => {
			const list = DoubleLinkedList();

			const node1 = list.append( 1 );

			expect( list.length() ).toEqual( 1 );
		} );
	} );

	describe( 'traverse', () => {
		test( 'shortcircuit evaluation to find node', () => {
			const list = DoubleLinkedList();

			const node = list.append( 1 );

			let result = null;

			list.traverse( ( item ) => {
				if ( item.data === 1 ) {
					result = item;
					return null;
				}

				return undefined;
			} )

			expect( result ).toEqual( node );
		} );
	} );

	describe( 'reverse', () => {
		test( 'print list backwards', () => {
			const list = DoubleLinkedList();

			list.append( 1 );
			list.append( 2 );
			list.append( 3 );

			let result = [];

			list.reverse( ( item ) => result.push( item.data ) )

			expect( result ).toEqual( [ 3, 2, 1 ] );
		} );
	} )

	describe( 'intoArray', () => {
		test( 'build list of three nodes', () => {
			const list = DoubleLinkedList();

			list.append( 1 );
			list.append( 2 );
			list.append( 3 );

			const array = list.intoArray();

			expect( array ).toEqual( [ 1, 2, 3 ] );
		} );
	} );

	describe( 'print', () => {
		test( 'print list of four nodes of various types', () => {
			const list = DoubleLinkedList();

			list.append( 1 );
			list.append( 'two' );
			list.append( [ 3 ] );
			list.append( { four: 4 } );

			const string = list.print();

			expect( string ).toEqual( '1 \"two\" [3] {\"four\":4}' );
		} );
	} );
} );
