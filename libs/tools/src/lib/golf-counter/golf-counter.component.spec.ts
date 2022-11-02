import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GolfCounterComponent } from './golf-counter.component';

describe('GolfCounterComponent', () => {
  let component: GolfCounterComponent;
  let fixture: ComponentFixture<GolfCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GolfCounterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GolfCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
