import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RPAComponent } from './rpa.component';

describe('RPAComponent', () => {
  let component: RPAComponent;
  let fixture: ComponentFixture<RPAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RPAComponent]
    });
    fixture = TestBed.createComponent(RPAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
