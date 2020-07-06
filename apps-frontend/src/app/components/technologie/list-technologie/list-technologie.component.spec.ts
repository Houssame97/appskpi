import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTechnologieComponent } from './list-technologie.component';

describe('ListTechnologieComponent', () => {
  let component: ListTechnologieComponent;
  let fixture: ComponentFixture<ListTechnologieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTechnologieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTechnologieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
