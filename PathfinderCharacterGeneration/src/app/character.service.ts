import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Description, characters } from './description';
import { AbilityScores } from './abilityscores';


@Injectable()
export class CharacterService {

    public currentDescriptionSource = new BehaviorSubject<Description>(null);
    public currentAbilitySource = new BehaviorSubject<AbilityScores>(null);
    public activateSubject = new BehaviorSubject<boolean>(false);

    currentDescription$ = this.currentDescriptionSource.asObservable();
    currentAbilities$ = this.currentAbilitySource.asObservable();


    constructor() { }

    sendObject() {
        this.activateSubject.next(true);
    }

    setCurrentDescription(newDescription: Description): void {
        this.currentDescriptionSource.next(newDescription);
    }

    setCurrentAbilityScores(newAbilityScores: AbilityScores): void {
        this.currentAbilitySource.next(newAbilityScores);
    }

    getCurrentDescription(): Description {
        return this.currentDescriptionSource.value;
    }

    getCurrentAbilityScores(): AbilityScores {
        return this.currentAbilitySource.value;
    }
}

export const characterServiceInjectables: Array<any> = [
    CharacterService
];