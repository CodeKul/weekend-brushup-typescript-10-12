import { Lpg } from './lpg';
import { Light } from './light';

export interface Gps extends Light, Lpg {
    location(): string;
}