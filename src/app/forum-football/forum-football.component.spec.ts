import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumFootballComponent } from './forum-football.component';

describe('ForumFootballComponent', () => {
  let component: ForumFootballComponent;
  let fixture: ComponentFixture<ForumFootballComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumFootballComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumFootballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
