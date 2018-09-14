import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitRemoveDialogComponent } from './visit-remove-dialog.component';

describe('VisitRemoveDialogComponent', () => {
  let component: VisitRemoveDialogComponent;
  let fixture: ComponentFixture<VisitRemoveDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitRemoveDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitRemoveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
