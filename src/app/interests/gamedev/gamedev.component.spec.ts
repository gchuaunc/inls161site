import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamedevComponent } from './gamedev.component';

describe('GamedevComponent', () => {
  let component: GamedevComponent;
  let fixture: ComponentFixture<GamedevComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GamedevComponent]
    });
    fixture = TestBed.createComponent(GamedevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
