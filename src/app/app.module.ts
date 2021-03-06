import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { FootballComponent } from './football/football.component';
import { BasketballComponent } from './basketball/basketball.component';
import { VolleyballComponent } from './volleyball/volleyball.component';
import { CreatearticleComponent } from './createarticle/createarticle.component';
import { ForumComponent } from './forum/forum.component';
import { ForumFootballComponent } from './forum-football/forum-football.component';
import { ForumBasketballComponent } from './forum-basketball/forum-basketball.component';
import { ForumVolleyballComponent } from './forum-volleyball/forum-volleyball.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    FootballComponent,
    BasketballComponent,
    VolleyballComponent,
    CreatearticleComponent,
    ForumComponent,
    ForumFootballComponent,
    ForumBasketballComponent,
    ForumVolleyballComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
