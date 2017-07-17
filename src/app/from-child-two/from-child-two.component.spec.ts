import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromChildTwoComponent } from './from-child-two.component';

describe('FromChildTwoComponent', () => {
  let component: FromChildTwoComponent;
  let fixture: ComponentFixture<FromChildTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromChildTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromChildTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
