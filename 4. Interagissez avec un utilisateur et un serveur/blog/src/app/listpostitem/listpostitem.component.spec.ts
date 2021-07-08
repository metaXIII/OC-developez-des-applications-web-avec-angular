import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpostitemComponent } from './listpostitem.component';

describe('ListpostitemComponent', () => {
  let component: ListpostitemComponent;
  let fixture: ComponentFixture<ListpostitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListpostitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpostitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
