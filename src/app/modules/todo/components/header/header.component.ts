import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/models/user.model';
import { loadCheckAuths } from 'src/app/modules/auth/store/actions/check-auth.actions';
import { loadSignouts } from 'src/app/modules/auth/store/actions/signout.actions';
import { State } from 'src/app/modules/auth/store/reducer/auth.reducer';
import { getAuthUser } from 'src/app/modules/auth/store/selector/auth.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public user: Observable<UserModel>;

  constructor(private authStore: Store<State>) {}

  ngOnInit(): void {
    this.authStore.dispatch(loadCheckAuths());
    this.user = this.authStore.select(getAuthUser);
  }

  signout() {
    this.authStore.dispatch(loadSignouts());
  }
}
