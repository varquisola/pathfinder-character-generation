import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Description, characters } from './description';
import { AbilityScores } from './abilityscores';


@Injectable()
export class ButtonEmitterService {

    public nextButtonSource = new BehaviorSubject<boolean>(false);
    public prevButtonSource = new BehaviorSubject<boolean>(false);

    nextObservable$ = this.nextButtonSource.asObservable();
    prevObservable$ = this.prevButtonSource.asObservable();

    constructor() { }

    nextButtonPressed(): void {
        this.nextButtonSource.next(true);
    }

    prevButtonPressed(): void {
        this.prevButtonSource.next(true);
    }
}

export const characterServiceInjectables: Array<any> = [
    ButtonEmitterService
];