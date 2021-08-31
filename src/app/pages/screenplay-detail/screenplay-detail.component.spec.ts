import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenplayDetailComponent } from './screenplay-detail.component';

describe('ScreenplayDetailComponent', () => {
  let component: ScreenplayDetailComponent;
  let fixture: ComponentFixture<ScreenplayDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenplayDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenplayDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
