import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoMainComponent } from './pages/todo-main/todo-main.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { EffectsModule } from '@ngrx/effects';
import { GetTodoEffects } from './store/effects/get-todo.effects';
import { AddTodoEffects } from './store/effects/add-todo.effects';
import { UpdateTodoEffects } from './store/effects/update-todo.effects';
import { DeleteTodoEffects } from './store/effects/delete-todo.effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { todoFeatureKey, todoReducer } from './store/reducers/todo.reducer';
import { TodoService } from './services/todo.service';
import { SignedInGuard } from '../auth/guards/signed-in.guard';
import { SignedOutGuard } from '../auth/guards/signed-out.guard';

const routes: Routes = [
  {
    path: '',
    component: TodoMainComponent,
    canActivate: [SignedInGuard],
  },
];

@NgModule({
  declarations: [
    TodoMainComponent,
    HeaderComponent,
    TodoListComponent,
    TodoComponent,
    TodoFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([
      GetTodoEffects,
      AddTodoEffects,
      UpdateTodoEffects,
      DeleteTodoEffects,
    ]),
    StoreModule.forFeature(todoFeatureKey, todoReducer),
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [TodoService, SignedInGuard, SignedOutGuard],
})
export class TodoModule {}
