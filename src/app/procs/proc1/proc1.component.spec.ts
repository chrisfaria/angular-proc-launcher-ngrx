import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Proc1Component } from './proc1.component';

describe('Proc1Component', () => {
  let component: Proc1Component;
  let fixture: ComponentFixture<Proc1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Proc1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Proc1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
