import { Actor } from './actor.model';

export interface Screenplay {
    id: number;
    title: string;
    description: string;
    releaseDate: Date;
    category: string;
    actors: Actor[];
    averageRate: number;
}