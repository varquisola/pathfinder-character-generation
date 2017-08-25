import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcgOtherScoresComponent } from './pcg-other-scores.component';

describe('PcgOtherScoresComponent', () => {
  let component: PcgOtherScoresComponent;
  let fixture: ComponentFixture<PcgOtherScoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcgOtherScoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcgOtherScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
