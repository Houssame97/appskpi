import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIndustrieComponent } from './list-industrie.component';

describe('ListIndustrieComponent', () => {
  let component: ListIndustrieComponent;
  let fixture: ComponentFixture<ListIndustrieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListIndustrieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListIndustrieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
