import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { loadAddTodos } from '../../store/actions/add-todo.actions';
import { TodoState } from '../../store/reducers/todo.reducer';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  public todoForm: FormGroup;

  constructor(private fb: FormBuilder, private todoStore: Store<TodoState>) {}

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      text: ['', Validators.required],
    });
  }

  submit() {
    if (this.todoForm.valid) {
      const text: string = this.todoForm.get('text').value as string;

      if (text.length !== 0) {
        this.todoStore.dispatch(loadAddTodos({ todoText: text }));
        this.todoForm.reset();
      }
    }
  }
}
