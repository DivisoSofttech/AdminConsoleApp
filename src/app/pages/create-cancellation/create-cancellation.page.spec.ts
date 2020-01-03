import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCancellationPage } from './create-cancellation.page';

describe('CreateCancellationPage', () => {
  let component: CreateCancellationPage;
  let fixture: ComponentFixture<CreateCancellationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCancellationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCancellationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
