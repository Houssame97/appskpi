import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTypeFacturationComponent } from './list-type-facturation.component';

describe('ListTypeFacturationComponent', () => {
  let component: ListTypeFacturationComponent;
  let fixture: ComponentFixture<ListTypeFacturationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTypeFacturationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTypeFacturationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
