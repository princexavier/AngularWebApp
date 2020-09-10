import { PostsComponent } from './posts/posts.component';
import { GithubprofileComponent } from './githubprofile/githubprofile.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { GithubfollowersService } from './githubfollowers.service';
import { DataService } from './data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ArchiveComponent } from './archive/archive.component';
import { HomearchiveComponent } from './homearchive/homearchive.component';
import { NotfoundarchiveComponent } from './notfoundarchive/notfoundarchive.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubFollowersComponent,
    NotfoundComponent,
    HomeComponent,
    PostsComponent,
    NotfoundComponent,
    GithubprofileComponent,
    ArchiveComponent,
    HomearchiveComponent,
    NotfoundarchiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      // {path:'followers/:userid/:username',component:GithubprofileComponent},
      // {path:'followers',component:GithubFollowersComponent},
      // {path:'posts',component:PostsComponent},
      // {path:'**',component:NotfoundComponent},

      {path:'archive/:year/:month',component:ArchiveComponent},
      {path:'archive',component:ArchiveComponent},
      {path:'',component:HomearchiveComponent},
      {path:'**',component:NotfoundarchiveComponent},




    ])
  ],
  providers: [
    DataService,
    GithubfollowersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
