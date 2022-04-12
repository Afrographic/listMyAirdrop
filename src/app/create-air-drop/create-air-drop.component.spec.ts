import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAirDropComponent } from './create-air-drop.component';

describe('CreateAirDropComponent', () => {
  let component: CreateAirDropComponent;
  let fixture: ComponentFixture<CreateAirDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAirDropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAirDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
