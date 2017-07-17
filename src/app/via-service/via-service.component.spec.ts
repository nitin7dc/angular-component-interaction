import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViaServiceComponent } from './via-service.component';

describe('ViaServiceComponent', () => {
  let component: ViaServiceComponent;
  let fixture: ComponentFixture<ViaServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViaServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViaServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
