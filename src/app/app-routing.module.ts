import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { FootballComponent } from './football/football.component';
import { BasketballComponent } from './basketball/basketball.component';
import { VolleyballComponent } from './volleyball/volleyball.component';
import { CreatearticleComponent } from './createarticle/createarticle.component';
import { ForumComponent } from './forum/forum.component';
import { ForumFootballComponent } from './forum-football/forum-football.component';
import { ForumVolleyballComponent } from './forum-volleyball/forum-volleyball.component';
import { ForumBasketballComponent } from './forum-basketball/forum-basketball.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'football', component: FootballComponent },
  { path: 'basketball', component: BasketballComponent },
  { path: 'volleyball', component: VolleyballComponent },
  { path: 'createarticle', component: CreatearticleComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'forum-football', component: ForumFootballComponent },
  { path: 'forum-volleyball', component: ForumVolleyballComponent },
  { path: 'forum-basketball', component: ForumBasketballComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}