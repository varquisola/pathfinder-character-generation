import { Component, EventEmitter, Input, NgModule, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Description, alignments, classes, races, sizes, characters } from '../description';

import { ButtonEmitterService } from '../buttonemitter.service';
import { CharacterService } from '../character.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-pcg-description',
  templateUrl: './pcg-description.component.html'
})
export class PcgDescriptionComponent implements OnInit, OnChanges {
    description: Description;
    subscription: Subscription;
    sendObjectSubscription: Subscription;
    pcgForm: FormGroup;
    alignments = alignments;
    classes = classes;
    races = races;
    sizes = sizes;
    characters = characters;
   
    constructor(public buttonEmitterService: ButtonEmitterService, public characterService: CharacterService, fb: FormBuilder, private router: Router) {
        this.subscription = this.characterService.currentDescription$.subscribe(description => { this.description = description; });
        if (this.description === null) {
            this.description = new Description(0, '', null, '', null, 1, '', '',
                null, this.sizes[4], '', 1, 0, 0, 0, '', '');
        }

        this.pcgForm = fb.group({
            'name': this.description.name,
            'alignment': this.description.alignment,
            'player': this.description.player,
            'classname': this.description.classname,
            'level': this.description.level,
            'deity': this.description.deity,
            'homeland': this.description.homeland,
            'race': [this.description.race, [Validators.required]],
            'size': this.description.size,
            'gender': this.description.gender,
            'age': this.description.age,
            'heightfeet': this.description.heightfeet,
            'heightinches': this.description.heightinches,
            'weight': this.description.weight,
            'hair': this.description.hair,
            'eyes': this.description.eyes
        });

        this.raceChange();
        this.setSizeDependency();

    }

    ngOnInit() {
        this.sendObjectSubscription = this.characterService.activateSubject.subscribe(booleanVal => {
            if (booleanVal) {
                this.submitDescription();
            }
        });
    }
    
    ngOnChanges() {
        this.pcgForm.reset({
            name: this.description.name,
            alignment: this.description.alignment,
            player: this.description.player,
            classname: this.description.classname,
            level: this.description.level,
            deity: this.description.deity,
            homeland: this.description.homeland,
            race: this.description.race,
            size: this.description.size,
            gender: this.description.gender,
            age: this.description.age,
            heightfeet: this.description.heightfeet,
            heightinches: this.description.heightinches,
            weight: this.description.weight,
            hair: this.description.hair,
            eyes: this.description.eyes
        });
    }

    raceChange() {

        const raceControl = this.pcgForm.controls['race'];
        const ageControl = this.pcgForm.controls['age'];

        raceControl.valueChanges.subscribe((value) => {
            var minAge: number;
            if (value == 'Dwarf') {
                minAge = 40;
            }
            else if (value == 'Elf') {
                minAge = 110;
            }
            else if (value == 'Gnome') {
                minAge = 40;
            }
            else if (value == 'Half Elf') {
                minAge = 20;
            }
            else if (value == 'Half Orc') {
                minAge = 14;
            }
            else if (value == 'Halfling') {
                minAge = 20;
            }
            else if (value == 'Human') {
                minAge = 15;
            }

            ageControl.setValue(minAge);
            ageControl.setValidators([Validators.min(minAge)]);
        });
    }

    setSizeDependency() {
        const sizeControl = this.pcgForm.controls['size'];
        const heightFeetControl = this.pcgForm.controls['heightfeet'];
        const heightInchesControl = this.pcgForm.controls['heightinches'];
        const weightControl = this.pcgForm.controls['weight'];

        sizeControl.valueChanges.subscribe((value) => {
            var minFeet: number;
            var minInches: number;
            var maxFeet: number;
            var maxInches: number;
            var minWeight: number;
            var maxWeight: number;

            if (value == 'Fine') {

                minFeet = 0;
                maxFeet = 0;
                minInches = 0;
                maxInches = 6;
                minWeight = 0;
                maxWeight = .125;
            }
            else if (value == 'Diminutive') {
                minFeet = 0;
                maxFeet = 1;
                minInches = 0;
                maxInches = 12;
                minWeight = .125;
                maxWeight = 1;
            }
            else if (value == 'Tiny') {
                minFeet = 1;
                maxFeet = 2;
                minInches = 0;
                maxInches = 12;
                minWeight = 1;
                maxWeight = 8;
            }
            else if (value == 'Small') {
                minFeet = 2;
                maxFeet = 4;
                minInches = 0;
                maxInches = 12;
                minWeight = 8;
                maxWeight = 60;
            }
            else if (value == 'Medium') {
                minFeet = 4;
                maxFeet = 8;
                minInches = 0;
                maxInches = 12;
                minWeight = 60;
                maxWeight = 500;
            }
            else if (value == 'Large') {
                minFeet = 8;
                maxFeet = 16;
                minInches = 0;
                maxInches = 12;
                minWeight = 500;
                maxWeight = 4000;
            }
            else if (value == 'Huge') {
                minFeet = 16;
                maxFeet = 32;
                minInches = 0;
                maxInches = 12;
                minWeight = 4000;
                maxWeight = 32000;
            }
            else if (value == 'Gargantuan') {
                minFeet = 32;
                maxFeet = 64;
                minInches = 0;
                maxInches = 12;
                minWeight = 32000;
                maxWeight = 250000;
            }
            else if (value == 'Colossal') {
                minFeet = 64;
                minInches = 0;
                maxInches = 12;
                minWeight = 250000;
            }
            heightFeetControl.setValue(minFeet);
            heightInchesControl.setValue(minInches);
            weightControl.setValue(minWeight);
            heightFeetControl.setValidators([Validators.min(minFeet), Validators.max(maxFeet)]);
            heightInchesControl.setValidators([Validators.min(minInches), Validators.max(maxInches)]);
            weightControl.setValidators([Validators.min(minWeight), Validators.max(maxWeight)]);
        });
    }
    
    submitDescription(): void {
        this.description = this.prepareSaveDescription();
        this.characterService.setCurrentDescription(this.description);
        //this.ngOnChanges();
    }    

    toNextStep(): void {
        this.submitDescription();
        this.buttonEmitterService.nextButtonPressed();
    }

    addCharacter() {
        var entry = {
            id: this.characters.length + 1,
            name: this.description.name,
            alignment: this.description.alignment,
            player: this.description.player,
            classname: this.description.classname,
            level: this.description.level,
            deity: this.description.deity,
            homeland: this.description.homeland,
            race: this.description.race,
            size: this.description.size,
            gender: this.description.gender,
            age: this.description.age,
            heightfeet: this.description.heightfeet,
            heightinches: this.description.heightinches,
            weight: this.description.weight,
            hair: this.description.hair,
            eyes: this.description.eyes
        };
        console.log('Entry id is: ' + entry.id);
        console.log('Entry name is ' + entry.name);
        console.log('Entry alignment is ' + entry.alignment);
        this.characterService.setCurrentDescription(entry);
    }
    
    prepareSaveDescription(): Description {
        const formModel = this.pcgForm.value;
        var characterId: number;

        if (typeof this.description === "undefined") {
            characterId = 0;
        } else {
            characterId = this.description.id;
        }
        console.log('characterID: ' + characterId);
        const saveDescription: Description = {
            id: characterId,
            name: formModel.name as string,
            alignment: formModel.alignment as string,
            player: formModel.player as string,
            classname: formModel.classname as string,
            level: formModel.level as number,
            deity: formModel.deity as string,
            homeland: formModel.homeland as string,
            race: formModel.race as string,
            size: formModel.size as string,
            gender: formModel.gender as string,
            age: formModel.age as number,
            heightfeet: formModel.heightfeet as number,
            heightinches: formModel.heightinches as number,
            weight: formModel.weight as number,
            hair: formModel.hair as string,
            eyes: formModel.eyes as string
        }
        console.log('Description is: ' + saveDescription.name);
        return saveDescription;
    }

}
