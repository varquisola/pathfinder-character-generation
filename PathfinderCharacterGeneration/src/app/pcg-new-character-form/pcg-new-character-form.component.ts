import { Component, ContentChildren, QueryList, Output, EventEmitter, OnInit, AfterContentInit } from '@angular/core';
import { PcgFormStepComponent } from '../pcg-form-step/pcg-form-step.component';

import { ButtonEmitterService } from '../buttonemitter.service';
import { CharacterService } from '../character.service';

import { Subscription } from 'rxjs/Subscription';


@Component({
    selector: 'app-pcg-new-character-form',
    templateUrl: './pcg-new-character-form.component.html',
    styleUrls: ['./pcg-new-character-form.component.css']
})
export class PcgNewCharacterFormComponent implements OnInit, AfterContentInit {
    @ContentChildren(PcgFormStepComponent)
    formSteps: QueryList<PcgFormStepComponent>;

    nextbuttonEmitterSubscription: Subscription;
    prevbuttonEmitterSubscription: Subscription;
    private steps: Array<PcgFormStepComponent> = [];
    private isCompleted: boolean = false;

    @Output()
    onStepChanged: EventEmitter<PcgFormStepComponent> = new EventEmitter<PcgFormStepComponent>();

    constructor(private buttonEmitterService: ButtonEmitterService, private characterService: CharacterService) { }

    ngOnInit() {
        this.nextbuttonEmitterSubscription = this.buttonEmitterService.nextObservable$.subscribe(response => {
            this.next();
        });
        this.prevbuttonEmitterSubscription = this.buttonEmitterService.prevObservable$.subscribe(response => {
            this.previous();
        });
    }

    ngAfterContentInit() {
        this.formSteps.forEach(step => this.steps.push(step));
        this.steps[0].isActive = true;
    }

    get getSteps(): Array<PcgFormStepComponent> {
        return this.steps;
    }

    get getCompleted(): boolean {
        return this.isCompleted;
    }

    get activeStep(): PcgFormStepComponent {
        return this.steps.find(step => step.isActive);
    }

    set activeStep(step: PcgFormStepComponent) {
        if (step !== this.activeStep && !step.isDisabled) {
            this.activeStep.isActive = false;
            step.isActive = true;
            this.onStepChanged.emit(step);
        }
    }

    public get activeStepIndex(): number {
        return this.steps.indexOf(this.activeStep);
    }

    get hasNextStep(): boolean {
        return this.activeStepIndex < this.steps.length - 1;
    }

    get hasPrevStep(): boolean {
        return this.activeStepIndex > 0;
    }

    public goToStep(step: PcgFormStepComponent): void {
        if (!this.isCompleted) {
            this.activeStep = step;
        }
    }

    public next(): void {
        if (this.hasNextStep) {
            let nextStep: PcgFormStepComponent = this.steps[this.activeStepIndex + 1];
            this.activeStep.onNext.emit();
            nextStep.isDisabled = false;
            this.activeStep = nextStep;
        }
    }

    public previous(): void {
        if (this.hasPrevStep) {
            let prevStep: PcgFormStepComponent = this.steps[this.activeStepIndex - 1];
            this.activeStep.onPrev.emit();
            prevStep.isDisabled = false;
            this.activeStep = prevStep;
        }
    }

    public complete(): void {
        this.activeStep.onComplete.emit();
        this.isCompleted = true;
    }

}
