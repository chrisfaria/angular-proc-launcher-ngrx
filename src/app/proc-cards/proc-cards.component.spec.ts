import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcCardsComponent } from './proc-cards.component';

describe('ProcCardsComponent', () => {
  let component: ProcCardsComponent;
  let fixture: ComponentFixture<ProcCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
