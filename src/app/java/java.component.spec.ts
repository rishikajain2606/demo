import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JAVAComponent } from './java.component';

describe('JAVAComponent', () => {
  let component: JAVAComponent;
  let fixture: ComponentFixture<JAVAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JAVAComponent]
    });
    fixture = TestBed.createComponent(JAVAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
