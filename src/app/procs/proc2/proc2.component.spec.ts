import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Proc2Component } from './proc2.component';

describe('Proc2Component', () => {
  let component: Proc2Component;
  let fixture: ComponentFixture<Proc2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Proc2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Proc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
