import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadCheckAuths } from '../../store/actions/check-auth.actions';
import { loadSignInWithGoogles } from '../../store/actions/sign-in-with-google.actions';
import { State } from '../../store/reducer/auth.reducer';
import { getAuthLoading } from '../../store/selector/auth.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public authLoading: Observable<boolean>;

  constructor(private authStore: Store<State>) {}

  ngOnInit(): void {
    this.authStore.dispatch(loadCheckAuths());
    this.authLoading = this.authStore.select(getAuthLoading);
  }

  signInWithGoogle() {
    this.authStore.dispatch(loadSignInWithGoogles());
  }
}
