import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirdropVideoComponent } from './airdrop-video.component';

describe('AirdropVideoComponent', () => {
  let component: AirdropVideoComponent;
  let fixture: ComponentFixture<AirdropVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirdropVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirdropVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
