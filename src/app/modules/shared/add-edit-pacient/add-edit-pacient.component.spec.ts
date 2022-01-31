import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPacientComponent } from './add-edit-pacient.component';

describe('AddEditPacientComponent', () => {
  let component: AddEditPacientComponent;
  let fixture: ComponentFixture<AddEditPacientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditPacientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditPacientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
