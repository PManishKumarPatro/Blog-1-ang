

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'; // Import AppRoutingModule

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { AuthService } from './auth.service';
import { BlogService } from './blog.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BlogListComponent,
    BlogDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule // Include AppRoutingModule in the imports array
  ],
  providers: [AuthService, BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
