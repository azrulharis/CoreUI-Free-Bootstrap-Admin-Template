import { NgModule } from '@angular/core';

import { ButtonsComponent } from './buttons.component';
import { CardsComponent } from './cards.component';
import { FormsComponent } from './forms.component';
import { SocialButtonsComponent } from './social-buttons.component';
import { SwitchesComponent } from './switches.component';
import { TablesComponent } from './tables.component';



// Modal Component
import { ModalModule } from 'ng2-bootstrap/modal';
import { ModalsComponent } from './modals.component';

// Tabs Component
import { TabsModule } from 'ng2-bootstrap/tabs';
import { TabsComponent } from './tabs.component';

// Components Routing
import { ComponentsRoutingModule } from './components-routing.module';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DropdownModule } from 'ng2-bootstrap/dropdown';

// DMMBS
import { DebtsComponent } from './debts.component';
import { CustomersComponent } from './customers.component';
import { VehicleComponent } from './vehicle.component';
import { VehiclesComponent } from './vehicles.component';
import { AgencyComponent } from './agency.component';
import { ViewagentComponent } from './viewagent.component';
import { RepoComponent } from './repo.component';
import { ViewrepoComponent } from './viewrepo.component';
import { AddagentComponent } from './addagent.component'; 
import { AdduserComponent } from './adduser.component'; 
import { ViewuserComponent } from './viewuser.component'; 
import { UsersComponent } from './users.component';  

import { ViewdebtComponent } from './viewdebt.component';

import { AssignedComponent } from './assigned.component';

import { ReporequestComponent } from './reporequest.component';

import { ViewreporequestComponent } from './viewreporequest.component';

import { CollectionComponent } from './collection.component';

import { MyaccountComponent } from './myaccount.component';
import { ImportComponent } from './import.component';

import { ExpiredComponent } from './expired.component';
import { ChangeagentComponent } from './changeagent.component';
import { ViewagentperformanceComponent } from './viewagentperformance.component';

import { Addagent2Component } from './addagent2.component'; 
import { Addagent3Component } from './addagent3.component';

import { RepoagencyComponent } from './repoagency.component';

import { ViewrepoagentComponent } from './viewrepoagent.component';

import { RepossessedComponent } from './repossessed.component';

import { RepobroadcastComponent } from './repobroadcast.component'; 

import { AddrepoagentComponent } from './addrepoagent.component'; 
import { Addrepoagent2Component } from './addrepoagent2.component'; 
import { Addrepoagent3Component } from './addrepoagent3.component';
import { ReceivableComponent } from './receivable.component'; 

import { EditagentComponent } from './editagent.component'; 
import { Editagent2Component } from './editagent2.component'; 
import { Editagent3Component } from './editagent3.component'; 

import { PaymentcollectionstatusComponent } from './paymentcollectionstatus.component'; 
import { PaymentreceiveComponent } from './paymentreceive.component'; 

import { PaymentcollectionComponent } from './paymentcollection.component'; 
import { DiscountrequestedComponent } from './discountrequested.component'; 

import { ViewdiscountComponent } from './viewdiscount.component'; 
import { ParametersComponent } from './parameters.component'; 
import { AddparameterComponent } from './addparameter.component'; 
import { ViewparameterComponent } from './viewparameter.component'; 

@NgModule({
  imports: [
    ComponentsRoutingModule, 
    ModalModule.forRoot(),
    TabsModule,
    ChartsModule,
    DropdownModule
  ],
  declarations: [
  ViewparameterComponent,
  ParametersComponent,
  AddparameterComponent,
  ViewdiscountComponent,
  DiscountrequestedComponent,
    PaymentcollectionComponent,
    PaymentreceiveComponent,
    ButtonsComponent,
    CardsComponent,
    FormsComponent,
    ModalsComponent,
    SocialButtonsComponent,
    SwitchesComponent,
    TablesComponent,
    TabsComponent,
    DebtsComponent,
    CustomersComponent,
    VehicleComponent,
    AgencyComponent,
    ViewagentComponent,
    RepoComponent,
    ViewrepoComponent,
    AddagentComponent,
    AdduserComponent,
    ViewuserComponent,
    UsersComponent,
    ViewdebtComponent,
    AssignedComponent,
    ReporequestComponent,
    ViewreporequestComponent,
    CollectionComponent,
    MyaccountComponent,
    ImportComponent,
    ExpiredComponent,
    ChangeagentComponent,
    ViewagentperformanceComponent,
    Addagent2Component,
    Addagent3Component,
    RepoagencyComponent,
    ViewrepoagentComponent,
    RepossessedComponent,
    RepobroadcastComponent,
    AddrepoagentComponent,
    Addrepoagent3Component,
    Addrepoagent2Component, 
    ReceivableComponent,
    EditagentComponent,
    Editagent2Component,
    Editagent3Component,
    VehiclesComponent,
    PaymentcollectionstatusComponent
  ]
})
export class ComponentsModule { }
