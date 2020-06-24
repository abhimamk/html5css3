import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityProjectComponent } from './city-project.component';

describe('CityProjectComponent', () => {
  let component: CityProjectComponent;
  let fixture: ComponentFixture<CityProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
