import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';
  
import { AuthGuard } from './_guards/index';
 
//import { LoginComponent } from './login';
//import { RegisterComponent } from './register';

export const routes: Routes = [ 
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  { path: 'auth',  component: SimpleLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './auth/auth.module#AuthModule'
      } 
    ]
  }, 
 

  { path: '',   component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'components',
        loadChildren: './components/components.module#ComponentsModule'
      },
      {
        path: 'icons',
        loadChildren: './icons/icons.module#IconsModule'
      },
      {
        path: 'widgets',
        loadChildren: './widgets/widgets.module#WidgetsModule'
      },
      {
        path: 'charts',
        loadChildren: './chartjs/chartjs.module#ChartJSModule'
      }
    ]
  },
  
  {
    path: 'pages',
    component: SimpleLayoutComponent,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        loadChildren: './pages/pages.module#PagesModule',
      } 
    ]
  },

  
  { path: '**', component: SimpleLayoutComponent }
 /* {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  { 
    path: '', component: FullLayoutComponent, 
    
    canActivate: [
      AuthGuard
    ],
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'components',
        loadChildren: './components/components.module#ComponentsModule'
      },
      {
        path: 'icons',
        loadChildren: './icons/icons.module#IconsModule'
      },
      {
        path: 'widgets',
        loadChildren: './widgets/widgets.module#WidgetsModule'
      },
      {
        path: 'charts',
        loadChildren: './chartjs/chartjs.module#ChartJSModule'
      }
    ]
  }, 
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }, 
  { path: 'widgets', component: FullLayoutComponent },   
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'pages',
    component: SimpleLayoutComponent,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        loadChildren: './pages/pages.module#PagesModule',
      }
    ]
  },
  { path: '**', component: FullLayoutComponent } */
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
