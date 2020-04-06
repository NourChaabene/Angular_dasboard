import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectromecaniqueComponent } from './electromecanique.component';

describe('ElectromecaniqueComponent', () => {
  let component: ElectromecaniqueComponent;
  let fixture: ComponentFixture<ElectromecaniqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectromecaniqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectromecaniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
