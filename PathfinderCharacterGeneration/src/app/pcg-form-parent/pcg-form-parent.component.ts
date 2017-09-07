import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { PcgDescriptionComponent } from '../pcg-description/pcg-description.component';
import { PcgAbilityScoresComponent } from '../pcg-ability-scores/pcg-ability-scores.component';

import { ButtonEmitterService } from '../buttonemitter.service';
import { CharacterService } from '../character.service';

import { Description, characters } from '../description';

import { Subscription } from 'rxjs/Subscription';

export const routes: Routes = [
    { path: '', redirectTo: 'description', pathMatch: 'full' },
    { path: 'description', component: PcgDescriptionComponent },
    { path: 'abilityscores', component: PcgAbilityScoresComponent}
]
@Component({
  selector: 'app-pcg-form-parent',
  templateUrl: './pcg-form-parent.component.html',
  styleUrls: ['./pcg-form-parent.component.css']
})

export class PcgFormParentComponent implements OnInit {
    characterSubscription: Subscription;
    myDescription: Description;
    testDescription: Description;
 
    constructor(public buttonEmitterService: ButtonEmitterService, public characterService: CharacterService) {
        
    }

    ngOnInit() {
        //this.myDescription = this.characterService.myData();
        //this.someProperty = this.characterService.myData();
        /*
        this.subscription = this.characterService.currentDescription$
            .subscribe(description => this.myDescription = description);
        */

        this.characterSubscription = this.characterService.currentDescription$.subscribe(description => {
            this.myDescription = description;
            console.log("Object in parent component: " + this.myDescription);
        });

        this.testDescription = this.characterService.getCurrentDescription();
        console.log("Test description output: " + this.testDescription);
    }

    onStep1Next(event): void {
        console.log('It makes sense now!' + event);
        console.log(this.myDescription.name);
        //this.ngOnChanges();
    }    

    onStep2Next(event): void {
        console.log('I may not need this step!');
    }    

}
