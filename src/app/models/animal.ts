import { WithId } from './withId';

export interface Animal extends WithId {
    name: string;
    description: string;
}
