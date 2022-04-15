import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirdropCreatorComponent } from './airdrop-creator.component';

describe('AirdropCreatorComponent', () => {
  let component: AirdropCreatorComponent;
  let fixture: ComponentFixture<AirdropCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirdropCreatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirdropCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
