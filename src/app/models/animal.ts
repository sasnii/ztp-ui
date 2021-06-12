import { WithId } from './withId';

export interface Animal extends WithId {
    name: string;
    age: number;
    weight: string;
    height: string;
    description: string;
    type: string;
    image?: string;
}
