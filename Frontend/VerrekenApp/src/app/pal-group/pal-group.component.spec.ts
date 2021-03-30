import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalGroupComponent } from './pal-group.component';

describe('PalGroupComponent', () => {
  let component: PalGroupComponent;
  let fixture: ComponentFixture<PalGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
