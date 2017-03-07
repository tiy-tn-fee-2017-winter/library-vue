import books from '../../app/reducer/books';

module('reducer', () => {
  test('it has a default state of an empty array', (assert) => {
    const oldState = undefined;
    const action = {};
    const expectedState = [];

    assert.deepEqual(books(oldState, action), expectedState);
  });

  test('it can find all with an existing empty array', (assert) => {
    const oldState = [];
    const action = { type: 'BOOK@FINDALL_COMPLETE', data: [{ _id: '123', title: 'Rainbow Six' }, { _id: '456', title: 'The Authorities' }] };
    const expectedState = [{ _id: '123', title: 'Rainbow Six' }, { _id: '456', title: 'The Authorities' }];

    assert.deepEqual(books(oldState, action), expectedState);
  });

  test('it can add new items after find all with an existing array of items', (assert) => {
    const oldState = [{ _id: 'abc', title: 'The Three Body Problem' }];
    const action = { type: 'BOOK@FINDALL_COMPLETE', data: [{ _id: '456', title: 'Man in the High Castle' }] };
    const expectedState = [{ _id: '456', title: 'Man in the High Castle' }, { _id: 'abc', title: 'The Three Body Problem' }];

    assert.deepEqual(books(oldState, action), expectedState);
  });

  test('it replaces existing array items with find all', (assert) => {
    const oldState = [{ _id: 'abc', title: 'The Three Body Problem' }, { _id: '456', title: 'Man in the High Castle' }];
    const action = { type: 'BOOK@FINDALL_COMPLETE', data: [{ _id: '456', title: 'The Fold' }] };
    const expectedState = [{ _id: '456', title: 'The Fold' }, { _id: 'abc', title: 'The Three Body Problem' }];

    assert.deepEqual(books(oldState, action), expectedState);
  });

  test('it can add an item after create with an empty state', (assert) => {
    const oldState = [];
    const action = { type: 'BOOK@CREATE_COMPLETE', data: { _id: '456', title: 'The Fold' } };
    const expectedState = [{ _id: '456', title: 'The Fold' }];

    assert.deepEqual(books(oldState, action), expectedState);
  });

  test('it can add an item after create with existing items', (assert) => {
    const oldState = [{ _id: 'abc', title: 'The Three Body Problem' }];
    const action = { type: 'BOOK@CREATE_COMPLETE', data: { _id: '456', title: 'The Hobbit' } };
    const expectedState = [{ _id: '456', title: 'The Hobbit' }, { _id: 'abc', title: 'The Three Body Problem' }];

    assert.deepEqual(books(oldState, action), expectedState);
  });

  test('it can update an existing item and replace it in the array with only one in the array', (assert) => {
    const oldState = [{ _id: '456', title: 'The Three Body Problem' }];
    const action = { type: 'BOOK@UPDATE_COMPLETE', data: { _id: '456', title: 'The Hobbit' } };
    const expectedState = [{ _id: '456', title: 'The Hobbit' }];

    assert.deepEqual(books(oldState, action), expectedState);
  });

  test('it can update an existing item and replace it in the array with only one in the array', (assert) => {
    const oldState = [{ _id: '456', title: 'The Three Body Problem' }, { _id: 'abc', title: 'Mostly Harmless' }];
    const action = { type: 'BOOK@UPDATE_COMPLETE', data: { _id: '456', title: 'The Hobbit' } };
    const expectedState = [{ _id: '456', title: 'The Hobbit' }, { _id: 'abc', title: 'Mostly Harmless' }];

    assert.deepEqual(books(oldState, action), expectedState);
  });
});
