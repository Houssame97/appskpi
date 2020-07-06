import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCapabiliteComponent } from './list-capabilite.component';

describe('ListCapabiliteComponent', () => {
  let component: ListCapabiliteComponent;
  let fixture: ComponentFixture<ListCapabiliteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCapabiliteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCapabiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
