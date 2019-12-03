import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBannerPage } from './create-banner.page';

describe('CreateBannerPage', () => {
  let component: CreateBannerPage;
  let fixture: ComponentFixture<CreateBannerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBannerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBannerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
