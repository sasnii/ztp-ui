import {
  loadAnimalList,
  loadAnimalListSuccess,
  loadAnimalListFailed,
  addAnimal,
  addAnimalSuccess,
  addAnimalFailed,
  updateAnimal,
  updateAnimalSuccess,
  updateAnimalFailed,
  deleteAnimal,
  deleteAnimalSuccess,
  deleteAnimalFailed,
  deleteAllAnimals,
  deleteAllAnimalsSuccess,
  deleteAllAnimalsFailed
} from './../actions/animals.actions';
import { AnimalsState } from './../models/state/animal';
import { createReducer, on } from '@ngrx/store';


export const initialState: AnimalsState = {
  animals: [
    {
      id: 3,
      name: 'Pies mały',
      description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan',
      url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
    },
    {
      id: 2,
      name: 'Pies duży',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      url: 'https://www.zooplus.pl/magazyn/wp-content/uploads/2021/04/dog-niemiecki-768x512.jpg'
    },
    {
      id: 1,
      name: 'Kot',
      description: 'Nunc ut tempor massa. Quisque eu diam nunc. Morbi porttitor rutrum dolor quis porttitor.',
      url: 'https://www.zooplus.pl/magazyn/wp-content/uploads/2019/12/kot-przyb%C5%82%C4%99da-768x512.jpeg'
    },
    {
      id: 4,
      name: 'Pies labrador',
      description: 'Nunc ut tempor massa. Quisque eu diam nunc. Morbi porttitor rutrum dolor quis porttitor.',
      url: 'https://www.look4dog.com/img/thumbs/crop/w350h350q100/breeds/labrador-retriever-2990.jpeg'
    }
  ],
  isLoading: true
};

export const animalReducer = createReducer(
  initialState,
  on(loadAnimalList, state => ({ ...state, isLoading: false })), // TODO: change to true
  on(loadAnimalListSuccess, (state, { animals }) => ({ ...state, animals, isLoading: false })), // TODO: delete ...state
  on(loadAnimalListFailed, state => ({ ...state, isLoading: false })),

  on(addAnimal, (state, {animal}) => ({ ...state, animals: [...state.animals, animal] })),
  on(updateAnimal, (state, {id, animal}) => ({ ...state, animals: state.animals.map(n => n.id === id ? animal : n) })),
  on(deleteAnimal, (state, {id}) => ({ ...state, animals: state.animals.filter(n => n.id !== id) })),
  on(deleteAllAnimals, (state) => ({ ...state, animals: [] })),
);
