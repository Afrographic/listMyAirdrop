import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringGetterComponent } from './string-getter.component';

describe('StringGetterComponent', () => {
  let component: StringGetterComponent;
  let fixture: ComponentFixture<StringGetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringGetterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StringGetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
