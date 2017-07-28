import { NgModule } from '@angular/core';
 
import { RegisterComponent } from './register.component';  
import { RegisterRoutingModule } from './register-routing.module';

@NgModule({
  imports: [ RegisterRoutingModule ],
  declarations: [ 
    RegisterComponent 
  ]
})
export class RegisterModule { }
