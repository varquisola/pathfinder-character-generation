import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcgFormStepComponent } from './pcg-form-step.component';

describe('PcgFormStepComponent', () => {
  let component: PcgFormStepComponent;
  let fixture: ComponentFixture<PcgFormStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcgFormStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcgFormStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
