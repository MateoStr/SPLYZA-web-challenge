import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarItemComponent } from './navbar/navbar-item/navbar-item.component';
import { NavbarProfileComponent } from './navbar/navbar-profile/navbar-profile.component';
import { VideoListItemComponent } from './video-list-item/video-list-item.component';
import { VideoThumbnailComponent } from './video-list-item/video-thumbnail/video-thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarItemComponent,
    NavbarProfileComponent,
    VideoListItemComponent,
    VideoThumbnailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
