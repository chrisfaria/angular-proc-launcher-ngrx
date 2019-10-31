import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Proc6Component } from './proc6.component';

describe('Proc6Component', () => {
  let component: Proc6Component;
  let fixture: ComponentFixture<Proc6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Proc6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Proc6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
