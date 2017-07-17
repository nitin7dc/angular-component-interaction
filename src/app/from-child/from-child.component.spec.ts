import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromChildComponent } from './from-child.component';

describe('FromChildComponent', () => {
  let component: FromChildComponent;
  let fixture: ComponentFixture<FromChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
