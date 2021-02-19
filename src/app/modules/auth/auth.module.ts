import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { CheckAuthEffects } from './store/effects/check-auth.effects';
import { SignInWithGoogleEffects } from './store/effects/sign-in-with-google.effects';
import { SignoutEffects } from './store/effects/signout.effects';
import { StoreModule } from '@ngrx/store';
import { authFeatureKey, reducer } from './store/reducer/auth.reducer';
import { AuthService } from './services/auth.service';
import { SignedInGuard } from './guards/signed-in.guard';
import { SignedOutGuard } from './guards/signed-out.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [SignedOutGuard],
  },
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(authFeatureKey, reducer),
    EffectsModule.forFeature([
      CheckAuthEffects,
      SignInWithGoogleEffects,
      SignoutEffects,
    ]),
  ],
  providers: [AuthService, SignedInGuard, SignedOutGuard],
})
export class AuthModule {}
