import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { RegisterComponent } from './register.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Register'
    },
    children: [ 
      {
        path: 'register',
        component: RegisterComponent,
        data: {
          title: 'Register Page'
        }
      } 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule {}
