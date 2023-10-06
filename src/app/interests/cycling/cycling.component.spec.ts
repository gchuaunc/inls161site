import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyclingComponent } from './cycling.component';

describe('CyclingComponent', () => {
  let component: CyclingComponent;
  let fixture: ComponentFixture<CyclingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CyclingComponent]
    });
    fixture = TestBed.createComponent(CyclingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
