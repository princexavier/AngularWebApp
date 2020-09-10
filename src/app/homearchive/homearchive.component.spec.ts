import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomearchiveComponent } from './homearchive.component';

describe('HomearchiveComponent', () => {
  let component: HomearchiveComponent;
  let fixture: ComponentFixture<HomearchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomearchiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomearchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
