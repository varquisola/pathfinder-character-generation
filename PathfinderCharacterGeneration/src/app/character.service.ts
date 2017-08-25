import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Description, characters } from './description';
import { AbilityScores } from './abilityscores';


@Injectable()
export class CharacterService {

    public currentDescriptionSource = new BehaviorSubject<Description>(null);
    public currentAbilitySource = new BehaviorSubject<AbilityScores>(null);
    currentDescription$ = this.currentDescriptionSource.asObservable();
    currentAbilities$ = this.currentAbilitySource.asObservable();

    constructor() { }

    setCurrentDescription(newDescription: Description): void {
        this.currentDescriptionSource.next(newDescription);
        this.currentDescriptionSource.complete();
    }

    setCurrentAbilityScores(newAbilityScores: AbilityScores): void {
        this.currentAbilitySource.next(newAbilityScores);
        this.currentAbilitySource.complete();
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