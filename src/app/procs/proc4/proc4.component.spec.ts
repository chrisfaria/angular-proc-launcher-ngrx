import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Proc4Component } from './proc4.component';

describe('Proc4Component', () => {
  let component: Proc4Component;
  let fixture: ComponentFixture<Proc4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Proc4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Proc4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
