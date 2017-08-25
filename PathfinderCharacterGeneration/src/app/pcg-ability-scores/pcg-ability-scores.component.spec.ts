import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcgAbilityScoresComponent } from './pcg-ability-scores.component';

describe('PcgAbilityScoresComponent', () => {
  let component: PcgAbilityScoresComponent;
  let fixture: ComponentFixture<PcgAbilityScoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcgAbilityScoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcgAbilityScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
