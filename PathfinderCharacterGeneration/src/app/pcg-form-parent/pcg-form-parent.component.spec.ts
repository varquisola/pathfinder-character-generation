import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcgFormParentComponent } from './pcg-form-parent.component';

describe('PcgFormParentComponent', () => {
  let component: PcgFormParentComponent;
  let fixture: ComponentFixture<PcgFormParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcgFormParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcgFormParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
