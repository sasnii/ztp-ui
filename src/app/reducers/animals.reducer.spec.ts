import { loadAnimalListSuccess, loadAnimalListFailed } from './../actions/animals.actions';
import { initialState, animalReducer } from './animals.reducer';
import { Animal } from './../models/animal';
import * as actions from './../actions/animals.actions';


fdescribe('Animals reducer', () => {

  it('should return initial state when state is undefined', () => {
    const state = animalReducer(undefined, { type: '' });
    expect(state).toEqual(initialState);
  });


  describe('when animals are loading', () => {
    it('should set isLoading to true when loadContactList action is dispatched', () => {
      const state = animalReducer(initialState, actions.loadAnimalList());
      expect(state.isLoading).toEqual(true);
    });

    it('should store items when loadProductListSuccess is dispatched and set isLoading to false', () => {
      const expetedItems: Animal[] = [{
        id: 1,
        name: 'name',
        age: 10,
        weight: '10',
        height: '10',
        description: 'description',
        type: 'dog'
      }];
      const state = animalReducer(initialState, actions.loadAnimalListSuccess({
        animals: expetedItems
      }));
      expect(state.animals).toEqual(expetedItems);
      expect(state.isLoading).toEqual(false);
    });

    it('should set isLoading to false when loadProductListFailed is dispatched', () => {
      const state = animalReducer(initialState, actions.loadAnimalListFailed({
        error: new Error()
      }));
      expect(state.isLoading).toEqual(false);
    });
  });

  describe('when adding animal', () => {
    it('should store animal', () => {
      const expetedItems: Animal = {
        id: 1,
        name: 'name',
        age: 10,
        weight: '10',
        height: '10',
        description: 'description',
        type: 'dog'
      };
      const state = animalReducer(initialState, actions.addAnimalSuccess({
        animal: expetedItems
      }));
      expect(state.animals).toEqual([expetedItems]);
    });
  });

  describe('when updating animal', () => {
    it('should update animal in store', () => {
      const expetedItems: Animal = {
        id: 1,
        name: 'updated',
        age: 10,
        weight: '10',
        height: '10',
        description: 'description',
        type: 'dog'
      };
      const state = animalReducer({
        animals: [{
          id: 1,
          name: 'name',
          age: 10,
          weight: '10',
          height: '10',
          description: 'description',
          type: 'dog'
        }],
        isLoading: true
      }, actions.updateAnimalSuccess({ id: 1, animal: expetedItems}));
      expect(state.animals).toEqual([expetedItems]);
    });
  });


  describe('when deleting animal', () => {
    it('should delete animal from store', () => {
      const state = animalReducer({
        animals: [{
          id: 1,
          name: 'name',
          age: 10,
          weight: '10',
          height: '10',
          description: 'description',
          type: 'dog'
        }],
        isLoading: true
      }, actions.deleteAnimalSuccess({ id: 1 }));
      expect(state.animals).toEqual([]);
    });
  });

  describe('when deleting all animals', () => {
    it('should clear the store', () => {
      const state = animalReducer({
        animals: [{
          id: 1,
          name: 'name',
          age: 10,
          weight: '10',
          height: '10',
          description: 'description',
          type: 'dog'
        },
        {
          id: 1,
          name: 'name',
          age: 10,
          weight: '10',
          height: '10',
          description: 'description',
          type: 'dog'
        }],
        isLoading: true
      }, actions.deleteAllAnimals());
      expect(state.animals).toEqual([]);
    });
  });

});
