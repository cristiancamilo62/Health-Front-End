import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcitaComponent } from './formcita.component';

describe('FormcitaComponent', () => {
  let component: FormcitaComponent;
  let fixture: ComponentFixture<FormcitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormcitaComponent]
    });
    fixture = TestBed.createComponent(FormcitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
