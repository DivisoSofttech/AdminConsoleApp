import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermCardComponent } from './term-card.component';

describe('TermCardComponent', () => {
  let component: TermCardComponent;
  let fixture: ComponentFixture<TermCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermCardComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
