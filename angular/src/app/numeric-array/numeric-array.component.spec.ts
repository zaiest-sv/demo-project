import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumericArrayComponent } from './numeric-array.component';

describe('NumericArrayComponent', () => {
  let component: NumericArrayComponent;
  let fixture: ComponentFixture<NumericArrayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumericArrayComponent]
    });
    fixture = TestBed.createComponent(NumericArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
