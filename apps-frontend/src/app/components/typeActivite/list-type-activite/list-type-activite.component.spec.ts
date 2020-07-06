import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTypeActiviteComponent } from './list-type-activite.component';

describe('ListTypeActiviteComponent', () => {
  let component: ListTypeActiviteComponent;
  let fixture: ComponentFixture<ListTypeActiviteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTypeActiviteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTypeActiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
