import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TodoModel } from 'src/app/models/todo.model';
import { v4 as uuidV4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private user!: firebase.User | null;

  constructor(
    private firestore: AngularFirestore,
    private auth: AngularFireAuth
  ) {
    this.auth.authState.subscribe((user) => (this.user = user));
  }

  public getTodo(): Observable<TodoModel[]> {
    return this.firestore
      .collection<TodoModel>(`users/${this.user?.uid}/todos`, (ref) =>
        ref.orderBy('createdAt', 'desc')
      )
      .snapshotChanges()
      .pipe(
        map((querySnapshot) => {
          return querySnapshot.map((doc) => {
            const data = doc.payload.doc.data();

            const todo: TodoModel = {
              id: doc.payload.doc.id,
              text: data.text,
              done: data.done,
              createdAt: data.createdAt,
              updatedAt: data.updatedAt,
            };

            return todo;
          });
        })
      );
  }

  public async addTodo(todoText: string): Promise<void> {
    const docId: string = uuidV4();
    await this.firestore
      .collection('users')
      .doc(this.user?.uid)
      .collection('todos')
      .doc(docId)
      .set({
        text: todoText,
        done: false,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
  }

  public async updateTodo(todo: TodoModel): Promise<void> {
    await this.firestore
      .collection('users')
      .doc(this.user?.uid)
      .collection('todos')
      .doc(todo.id)
      .update({
        done: !todo.done,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
  }

  public async deleteTodo(todo: TodoModel): Promise<void> {
    await this.firestore
      .collection('users')
      .doc(this.user?.uid)
      .collection('todos')
      .doc(todo.id)
      .delete();
  }
}
