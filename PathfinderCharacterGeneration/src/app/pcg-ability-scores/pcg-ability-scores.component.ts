import { Component, Input, OnInit, OnChanges} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Description } from '../description';
import { AbilityScores } from '../abilityscores';

import { ButtonEmitterService } from '../buttonemitter.service';
import { CharacterService } from '../character.service';

import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-pcg-ability-scores',
    templateUrl: './pcg-ability-scores.component.html',
    styleUrls: ['./pcg-ability-scores.component.css']
})
export class PcgAbilityScoresComponent implements OnInit, OnChanges {
    currentDescription: Description;
    subscription: Subscription;
    abilityscores: AbilityScores;
    abilityForm: FormGroup;
    
    racialBonusMessage: string;
    assignPointsMessage: string;
    router: Router

    constructor(private buttonEmitterService: ButtonEmitterService, private characterService: CharacterService, fb: FormBuilder) {
        this.abilityscores = new AbilityScores(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        this.abilityForm = fb.group({
            'strscore': this.abilityscores.strscore,
            'dexscore': this.abilityscores.dexscore,
            'conscore': this.abilityscores.conscore,
            'intscore': this.abilityscores.intscore,
            'wisscore': this.abilityscores.wisscore,
            'chascore': this.abilityscores.chascore
        });  
    }

    ngOnInit() {
        this.subscription = this.characterService.currentDescription$.subscribe(description => {
            this.currentDescription = description;
            if (this.currentDescription != null) {
                console.log('Object made it through subscription: ' + this.currentDescription.race);
            }
            console.log(this.abilityscores.strscore);
            if (this.currentDescription != undefined) {
                if (this.currentDescription.race == 'Human' || this.currentDescription.race == 'Half Elf' || this.currentDescription.race == 'Half Orc') {
                    this.racialBonusMessage = 'Because you picked ' + this.currentDescription.race + ' as your race, add +2 to any stat!';
                }
                else {
                    this.racialBonusMessage = 'Because you picked ' + this.currentDescription.race + ' as your race, your racial bonus has been calculated below.';
                }


                this.applyRacialBonus();
                this.applyModifier();
            }
        });
    }

    ngOnChanges() {
        
    }

    applyRacialBonus() {
        const strscoreControl = this.abilityForm.controls['strscore'];
        const dexscoreControl = this.abilityForm.controls['dexscore'];
        const conscoreControl = this.abilityForm.controls['conscore'];
        const intscoreControl = this.abilityForm.controls['intscore'];
        const wisscoreControl = this.abilityForm.controls['wisscore'];
        const chascoreControl = this.abilityForm.controls['chascore'];
        

        if (this.currentDescription.race === 'Dwarf') {
            conscoreControl.setValue(2);
            wisscoreControl.setValue(2);
            chascoreControl.setValue(-2);
        }
        else if (this.currentDescription.race === 'Elf') {
            dexscoreControl.setValue(2);
            intscoreControl.setValue(2);
            conscoreControl.setValue(-2);
        }
        else if (this.currentDescription.race === 'Gnome') {
            conscoreControl.setValue(2);
            chascoreControl.setValue(2);
            strscoreControl.setValue(-2);
        }
        else if (this.currentDescription.race === 'Halfling') {
            dexscoreControl.setValue(2);
            chascoreControl.setValue(2);
            strscoreControl.setValue(-2);
        }
    }

    applyModifier() {
        const strscoreControl = this.abilityForm.controls['strscore'];
        const dexscoreControl = this.abilityForm.controls['dexscore'];
        const conscoreControl = this.abilityForm.controls['conscore'];
        const intscoreControl = this.abilityForm.controls['intscore'];
        const wisscoreControl = this.abilityForm.controls['wisscore'];
        const chascoreControl = this.abilityForm.controls['chascore'];

        strscoreControl.valueChanges.subscribe((value) => {
            this.abilityscores.strmodifier = Math.floor((value - 11) / 2);
        });
        dexscoreControl.valueChanges.subscribe((value) => {
            this.abilityscores.dexmodifier = Math.floor((value - 11) / 2);
        });
        conscoreControl.valueChanges.subscribe((value) => {
            this.abilityscores.conmodifier = Math.floor((value - 11) / 2);
        });
        intscoreControl.valueChanges.subscribe((value) => {
            this.abilityscores.intmodifier = Math.floor((value - 11) / 2);
        });
        wisscoreControl.valueChanges.subscribe((value) => {
            this.abilityscores.wismodifier = Math.floor((value - 11) / 2);
        });
        chascoreControl.valueChanges.subscribe((value) => {
            this.abilityscores.chamodifier = Math.floor((value - 11) / 2);
        });
    }

    prepareSaveAbilities(): AbilityScores {
        const formModel = this.abilityForm.value;
        var characterId: number;

        const saveAbilities: AbilityScores = {
            id: this.currentDescription.id,
            strscore: formModel.strscore as number,
            dexscore: formModel.dexscore as number,
            conscore: formModel.conscore as number,
            intscore: formModel.intscore as number,
            wisscore: formModel.wisscore as number,
            chascore: formModel.chascore as number,
            strmodifier: this.abilityscores.strmodifier,
            dexmodifier: this.abilityscores.dexmodifier,
            conmodifier: this.abilityscores.conmodifier,
            intmodifier: this.abilityscores.intmodifier,
            wismodifier: this.abilityscores.wismodifier,
            chamodifier: this.abilityscores.chamodifier
        }
        console.log('save abilities content: ' + saveAbilities);
        return saveAbilities;
    }

    toPrevStep(): void {
        this.buttonEmitterService.prevButtonPressed();
    }   

    toNextStep(): void {
        this.abilityscores = this.prepareSaveAbilities();
        this.characterService.setCurrentAbilityScores(this.abilityscores);
        this.buttonEmitterService.nextButtonPressed();
    }   

}
