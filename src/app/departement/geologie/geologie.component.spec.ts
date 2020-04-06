import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeologieComponent } from './geologie.component';

describe('GeologieComponent', () => {
  let component: GeologieComponent;
  let fixture: ComponentFixture<GeologieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeologieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeologieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
