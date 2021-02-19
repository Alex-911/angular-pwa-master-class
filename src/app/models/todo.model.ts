import firebase from 'firebase';

export interface TodoModel {
  id: string;
  text: string;
  done: boolean;
  createdAt: firebase.firestore.FieldValue;
  updatedAt: firebase.firestore.FieldValue;
}
