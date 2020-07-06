import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRessourceCertificationComponent } from './list-ressource-certification.component';

describe('ListRessourceCertificationComponent', () => {
  let component: ListRessourceCertificationComponent;
  let fixture: ComponentFixture<ListRessourceCertificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRessourceCertificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRessourceCertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
