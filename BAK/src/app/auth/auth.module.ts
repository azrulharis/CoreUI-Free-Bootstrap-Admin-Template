import { NgModule } from '@angular/core';
 
import { LoginComponent } from './login.component';   
import { RegisterComponent } from './register.component';  
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  imports: [ AuthRoutingModule ],
  declarations: [ 
    LoginComponent,
    RegisterComponent 
  ]
})
export class AuthModule { }
