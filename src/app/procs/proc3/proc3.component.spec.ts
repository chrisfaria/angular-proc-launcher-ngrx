import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Proc3Component } from './proc3.component';

describe('Proc3Component', () => {
  let component: Proc3Component;
  let fixture: ComponentFixture<Proc3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Proc3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Proc3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
