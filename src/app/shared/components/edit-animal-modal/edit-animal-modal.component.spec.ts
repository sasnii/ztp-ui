import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAnimalModalComponent } from './edit-animal-modal.component';

describe('EditAnimalModalComponent', () => {
  let component: EditAnimalModalComponent;
  let fixture: ComponentFixture<EditAnimalModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAnimalModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAnimalModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
