import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportStolenItemPage } from './report-stolen-item.page';

describe('ReportStolenItemPage', () => {
  let component: ReportStolenItemPage;
  let fixture: ComponentFixture<ReportStolenItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportStolenItemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportStolenItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
