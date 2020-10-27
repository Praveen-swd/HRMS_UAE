import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayScaleComponent } from './payscale.component';

describe('PayScaleComponent', () => {
  let component: PayScaleComponent;
  let fixture: ComponentFixture<PayScaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayScaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
