import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyICOComponent } from './verify-ico.component';

describe('VerifyICOComponent', () => {
  let component: VerifyICOComponent;
  let fixture: ComponentFixture<VerifyICOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyICOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyICOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
