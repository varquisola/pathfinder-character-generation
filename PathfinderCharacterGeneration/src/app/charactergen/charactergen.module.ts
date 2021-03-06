﻿import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router, Routes } from '@angular/router';

import { PcgFormParentComponent } from '../pcg-form-parent/pcg-form-parent.component';
import { PcgDescriptionComponent } from '../pcg-description/pcg-description.component';
import { PcgAbilityScoresComponent } from '../pcg-ability-scores/pcg-ability-scores.component';
import { PcgOtherScoresComponent } from '../pcg-other-scores/pcg-other-scores.component';
import { PcgNewCharacterFormComponent } from '../pcg-new-character-form/pcg-new-character-form.component';
import { PcgFormStepComponent } from '../pcg-form-step/pcg-form-step.component';

export const routes: Routes = [
    { path: '', redirectTo: 'description', pathMatch: 'full' },
    { path: 'description', component: PcgDescriptionComponent },
    { path: 'abilityscores', component: PcgAbilityScoresComponent },
    { path: 'otherscores', component: PcgOtherScoresComponent }
];

@NgModule({
    declarations: [
        PcgDescriptionComponent,
        PcgAbilityScoresComponent,
        PcgFormParentComponent,
        PcgOtherScoresComponent,
        PcgNewCharacterFormComponent,
        PcgFormStepComponent
    ],
    exports: [
        PcgDescriptionComponent,
        PcgAbilityScoresComponent,
        PcgFormParentComponent,
        PcgOtherScoresComponent,
        PcgNewCharacterFormComponent,
        PcgFormStepComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ]
})

export class CharacterGenModule { }
