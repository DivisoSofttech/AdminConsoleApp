import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAboutPage } from './new-about.page';

describe('NewAboutPage', () => {
  let component: NewAboutPage;
  let fixture: ComponentFixture<NewAboutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAboutPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAboutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
