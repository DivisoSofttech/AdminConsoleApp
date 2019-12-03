import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannersPage } from './banners.page';

describe('BannersPage', () => {
  let component: BannersPage;
  let fixture: ComponentFixture<BannersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
