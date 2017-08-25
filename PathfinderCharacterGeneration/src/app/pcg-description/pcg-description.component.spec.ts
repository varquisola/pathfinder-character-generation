import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcgDescriptionComponent } from './pcg-description.component';

describe('PcgDescriptionComponent', () => {
  let component: PcgDescriptionComponent;
  let fixture: ComponentFixture<PcgDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcgDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcgDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
