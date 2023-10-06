import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikefixComponent } from './bikefix.component';

describe('BikefixComponent', () => {
  let component: BikefixComponent;
  let fixture: ComponentFixture<BikefixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BikefixComponent]
    });
    fixture = TestBed.createComponent(BikefixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
