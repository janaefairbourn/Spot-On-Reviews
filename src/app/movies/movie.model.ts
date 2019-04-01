import { Injectable } from "@angular/core";

@Injectable()
export class Movie {
    constructor(public id: string, public title: string, public rating: string, public review: string, 
        public imageUrl: string) {}
}