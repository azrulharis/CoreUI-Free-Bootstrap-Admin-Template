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
@NgModule({
  imports: [
    ComponentsRoutingModule, 
    ModalModule.forRoot(),
    TabsModule,
    ChartsModule,
    DropdownModule
  ],
  declarations: [
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
    ChangeagentComponent
  ]
})
export class ComponentsModule { }
