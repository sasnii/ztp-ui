import { AnimalsState } from '../models/state/animal';
import { createReducer } from '@ngrx/store';


export const initialState: AnimalsState = {
  animals: [
    {
      name: 'Kot',
      description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan',
      url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
    },
    {
      name: 'Pies',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      url: 'https://www.zooplus.pl/magazyn/wp-content/uploads/2021/04/dog-niemiecki-768x512.jpg'
    },
    {
      name: 'Kot',
      description: 'Nunc ut tempor massa. Quisque eu diam nunc. Morbi porttitor rutrum dolor quis porttitor.',
      url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
    }
  ],
  isLoading: true
};

export const animalReducer = createReducer(
  initialState,
);
