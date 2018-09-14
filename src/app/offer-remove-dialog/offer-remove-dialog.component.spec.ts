import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferRemoveDialogComponent } from './offer-remove-dialog.component';

describe('OfferRemoveDialogComponent', () => {
  let component: OfferRemoveDialogComponent;
  let fixture: ComponentFixture<OfferRemoveDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferRemoveDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferRemoveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
