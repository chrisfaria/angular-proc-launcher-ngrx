import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcListItemComponent } from './proc-list-item.component';

describe('ProcListItemComponent', () => {
  let component: ProcListItemComponent;
  let fixture: ComponentFixture<ProcListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
