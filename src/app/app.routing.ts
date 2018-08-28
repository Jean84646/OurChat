import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent} from './signup/signup.component';
import { BlogComponent } from './blog/blog.component';


const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
