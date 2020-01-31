import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoohComponent } from './pooh.component';

describe('PoohComponent', () => {
  let component: PoohComponent;
  let fixture: ComponentFixture<PoohComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoohComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoohComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
