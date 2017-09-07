import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Description } from '../description';
import { AbilityScores } from '../abilityscores';

import { ButtonEmitterService } from '../buttonemitter.service';
import { CharacterService } from '../character.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-pcg-other-scores',
  templateUrl: './pcg-other-scores.component.html',
  styleUrls: ['./pcg-other-scores.component.css']
})
export class PcgOtherScoresComponent implements OnInit {
    currentDescription: Description;
    currentAbilityScores: AbilityScores;
    hpForm: FormGroup;
    subscription: Subscription;
    hpScore: number;
  

    constructor(public characterService: CharacterService, fb: FormBuilder) {

        this.hpForm = fb.group({
            'hpscore': this.hpScore
        });
    }

    ngOnInit() {
        this.currentDescription = this.characterService.getCurrentDescription();
        this.currentAbilityScores = this.characterService.getCurrentAbilityScores();
        console.log('Object in other-scores: ' + this.currentAbilityScores);
    }

}
