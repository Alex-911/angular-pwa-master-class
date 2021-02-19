import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HomeComponent } from './pages/home/home.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthService } from './modules/auth/services/auth.service';
import { SignedInGuard } from './modules/auth/guards/signed-in.guard';
import { SignedOutGuard } from './modules/auth/guards/signed-out.guard';
import {
  authFeatureKey,
  reducer,
} from './modules/auth/store/reducer/auth.reducer';
import { CheckAuthEffects } from './modules/auth/store/effects/check-auth.effects';
import { SignoutEffects } from './modules/auth/store/effects/signout.effects';
import {
  todoFeatureKey,
  todoReducer,
} from './modules/todo/store/reducers/todo.reducer';
import { GetTodoEffects } from './modules/todo/store/effects/get-todo.effects';
import { TodoService } from './modules/todo/services/todo.service';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    StoreModule.forFeature(authFeatureKey, reducer),
    EffectsModule.forFeature([CheckAuthEffects, SignoutEffects]),
    StoreModule.forFeature(todoFeatureKey, todoReducer),
    EffectsModule.forFeature([GetTodoEffects]),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [AuthService, TodoService, SignedInGuard, SignedOutGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
