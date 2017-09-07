import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcgNewCharacterFormComponent } from './pcg-new-character-form.component';

describe('PcgNewCharacterFormComponent', () => {
  let component: PcgNewCharacterFormComponent;
  let fixture: ComponentFixture<PcgNewCharacterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcgNewCharacterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcgNewCharacterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
