import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoMainComponent } from './todo-main.component';

describe('TodoMainComponent', () => {
  let component: TodoMainComponent;
  let fixture: ComponentFixture<TodoMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
