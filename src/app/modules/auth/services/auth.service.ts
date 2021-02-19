import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: AngularFireAuth) {}

  checkAuth(): Observable<firebase.User | null> {
    return this.auth.authState;
  }

  async signInWithGoogle(): Promise<firebase.User | null> {
    const provider = new firebase.auth.GoogleAuthProvider();

    await this.auth.signInWithRedirect(provider);

    const res = await this.auth.getRedirectResult();

    return (await this.auth.getRedirectResult()).user;
  }

  async signout(): Promise<void> {
    await this.auth.signOut();
  }
}
