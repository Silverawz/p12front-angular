import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumBasketballComponent } from './forum-basketball.component';

describe('ForumBasketballComponent', () => {
  let component: ForumBasketballComponent;
  let fixture: ComponentFixture<ForumBasketballComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumBasketballComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumBasketballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
