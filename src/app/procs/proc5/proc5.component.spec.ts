import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Proc5Component } from './proc5.component';

describe('Proc5Component', () => {
  let component: Proc5Component;
  let fixture: ComponentFixture<Proc5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Proc5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Proc5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
