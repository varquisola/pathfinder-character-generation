import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-pcg-form-step',
    templateUrl: './pcg-form-step.component.html',
    styleUrls: ['./pcg-form-step.component.css']
})
export class PcgFormStepComponent {
    @Input() title: string;
    @Input() isValid: boolean = true;
    @Input() showNext: boolean = true;
    @Input() showPrev: boolean = true;

    @Output() onNext: EventEmitter<any> = new EventEmitter<any>();
    @Output() onPrev: EventEmitter<any> = new EventEmitter<any>();
    @Output() onComplete: EventEmitter<any> = new EventEmitter<any>();

    private active: boolean = false;
    isDisabled: boolean = true;

    constructor() { }

    @Input('isActive')
    set isActive(active: boolean) {
        this.active = active;
        this.isDisabled = false;
    }

    get isActive(): boolean {
        return this.active;
    }
  
}

