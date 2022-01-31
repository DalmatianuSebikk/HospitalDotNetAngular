import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoliComponent } from './boli.component';

describe('BoliComponent', () => {
  let component: BoliComponent;
  let fixture: ComponentFixture<BoliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
