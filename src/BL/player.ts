import { Person } from '../Interface/person';

export class Player implements Person {
    name: string;
    age: number;
    highScore: number;
    
    formatName() {
        return this.name.toUpperCase();
    }
}