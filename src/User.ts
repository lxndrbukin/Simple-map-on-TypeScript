import faker from 'faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {
    name: string;
    location: {
        lat: number;
        lng: number;
    }
    constructor(location: { lat: number, lng: number }) {
        this.name = faker.name.firstName();
        this.location = location;
    }

    markerContent(): string {
        return `You are here`;
    }
}