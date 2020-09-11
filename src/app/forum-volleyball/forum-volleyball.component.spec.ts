import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumVolleyballComponent } from './forum-volleyball.component';

describe('ForumVolleyballComponent', () => {
  let component: ForumVolleyballComponent;
  let fixture: ComponentFixture<ForumVolleyballComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumVolleyballComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumVolleyballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
