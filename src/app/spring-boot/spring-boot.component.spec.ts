import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SPRINGBOOTComponent } from './spring-boot.component';

describe('SPRINGBOOTComponent', () => {
  let component: SPRINGBOOTComponent;
  let fixture: ComponentFixture<SPRINGBOOTComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SPRINGBOOTComponent]
    });
    fixture = TestBed.createComponent(SPRINGBOOTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
