import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfoundarchiveComponent } from './notfoundarchive.component';

describe('NotfoundarchiveComponent', () => {
  let component: NotfoundarchiveComponent;
  let fixture: ComponentFixture<NotfoundarchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotfoundarchiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotfoundarchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
