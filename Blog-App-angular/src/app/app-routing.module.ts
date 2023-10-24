

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BlogListComponent } from './blog-list/blog-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'blog-list', component: BlogListComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
