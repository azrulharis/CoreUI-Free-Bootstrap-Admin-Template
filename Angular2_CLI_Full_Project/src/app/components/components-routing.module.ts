import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonsComponent } from './buttons.component';
import { CardsComponent } from './cards.component';
import { FormsComponent } from './forms.component';
import { ModalsComponent } from './modals.component';
import { SocialButtonsComponent } from './social-buttons.component';
import { SwitchesComponent } from './switches.component';
import { TablesComponent } from './tables.component';
import { TabsComponent } from './tabs.component';


// DMBS
import { DebtsComponent } from './debts.component';
import { CustomersComponent } from './customers.component';
import { VehicleComponent } from './vehicle.component';
import { VehiclesComponent } from './vehicles.component';
import { AgencyComponent } from './agency.component';
import { ViewagentComponent } from './viewagent.component';
import { RepoComponent } from './repo.component';

import { ViewrepoComponent } from './viewrepo.component'; 
import { AddagentComponent } from './addagent.component'; 
import { Addagent2Component } from './addagent2.component'; 
import { Addagent3Component } from './addagent3.component'; 
import { AdduserComponent } from './adduser.component'; 

import { UsersComponent } from './users.component'; 
import { ViewuserComponent } from './viewuser.component';  
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

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Components'
    },
    children: [
    {
        path: 'viewparameter',
        component: ViewparameterComponent,
        data: {
          title: 'View Parameters'
        }
      },
    {
        path: 'parameters',
        component: ParametersComponent,
        data: {
          title: 'Parameters'
        }
      },
      {
        path: 'addparameter',
        component: AddparameterComponent,
        data: {
          title: 'Add Parameter'
        }
      },
    {
        path: 'viewdiscount',
        component: ViewdiscountComponent,
        data: {
          title: 'Discount Requested'
        }
      },
    {
        path: 'discountrequested',
        component: DiscountrequestedComponent,
        data: {
          title: 'Discount Requested'
        }
      },
    {
        path: 'paymentcollection',
        component: PaymentcollectionComponent,
        data: {
          title: 'Upload Payment Receivable'
        }
      },
    {
        path: 'paymentreceive',
        component: PaymentreceiveComponent,
        data: {
          title: 'Payment Collection Receivable'
        }
      },
      {
        path: 'paymentcollectionstatus',
        component: PaymentcollectionstatusComponent,
        data: {
          title: 'Payment Collection Receivable'
        }
      },
      {
        path: 'buttons',
        component: ButtonsComponent,
        data: {
          title: 'Buttons'
        }
      },
      {
        path: 'cards',
        component: CardsComponent,
        data: {
          title: 'Cards'
        }
      },
      {
        path: 'forms',
        component: FormsComponent,
        data: {
          title: 'Forms'
        }
      },
      {
        path: 'modals',
        component: ModalsComponent,
        data: {
          title: 'Modals'
        }
      },
      {
        path: 'social-buttons',
        component: SocialButtonsComponent,
        data: {
          title: 'Social buttons'
        }
      },
      {
        path: 'switches',
        component: SwitchesComponent,
        data: {
          title: 'Switches'
        }
      },
      {
        path: 'tables',
        component: TablesComponent,
        data: {
          title: 'Tables'
        }
      },
      {
        path: 'debts',
        component: DebtsComponent,
        data: {
          title: 'Debt'
        }
      },
      {
        path: 'customers',
        component: CustomersComponent,
        data: {
          title: 'Customers'
        }
      },
      {
        path: 'vehicle',
        component: VehicleComponent,
        data: {
          title: 'Vehicle'
        }
      },
      {
        path: 'vehicles',
        component: VehiclesComponent,
        data: {
          title: 'Vehicle Lists'
        }
      },
      {
        path: 'repo',
        component: RepoComponent,
        data: {
          title: 'Repo'
        }
      },
      {
        path: 'tabs',
        component: TabsComponent,
        data: {
          title: 'Tabs'
        }
      },
      {
        path: 'agency',
        component: AgencyComponent, 
        data: {
          title: 'Agency'
        }
      },
      {
        path: 'viewagent/:id',
        component: ViewagentComponent,
        data: {
          title: 'Agency'
        }
      },
      {
        path: 'viewrepo/:id',
        component: ViewrepoComponent,
        data: {
          title: 'Repo'
        }
      },
      {
        path: 'addagent',
        component: AddagentComponent,
        data: {
          title: 'Add Agent'
        }
      },
      {
        path: 'adduser',
        component: AdduserComponent, 
        data: {
          title: 'Add User'
        }
      },
      {
        path: 'users',
        component: UsersComponent, 
        data: {
          title: 'User'
        }
      },
      {
        path: 'viewuser/:id',
        component: ViewuserComponent, 
        data: {
          title: 'User'
        }
      },
      {
        path: 'viewdebt/:id',
        component: ViewdebtComponent, 
        data: {
          title: 'Debt'
        }
      },
      {
        path: 'assigned',
        component: AssignedComponent, 
        data: {
          title: 'Assigned'
        }
      }, 
      {
        path: 'reporequest',
        component: ReporequestComponent, 
        data: {
          title: 'Repo Request' 
        }
      }, 
      {
        path: 'viewreporequest/:id',
        component: ViewreporequestComponent, 
        data: {
          title: 'View Repo Request'
        }
      },
      {
        path: 'collection',
        component: CollectionComponent, 
        data: {
          title: 'Collection' 
        }
      },
      {
        path: 'myaccount',
        component: MyaccountComponent, 
        data: {
          title: 'My Account' 
        }
      },
      {
        path: 'import',
        component: ImportComponent, 
        data: {
          title: 'Import' 
        }
      },
      {
        path: 'expired',
        component: ExpiredComponent, 
        data: {
          title: 'Aborted' 
        }
      },
      {
        path: 'changeagent/:id',
        component: ChangeagentComponent, 
        data: {
          title: 'Aborted' 
        }
      },
      {
        path: 'viewagentperformance/:id',
        component: ViewagentperformanceComponent, 
        data: {
          title: 'Agency Performance' 
        }
      },
      {
        path: 'addagent2',
        component: Addagent2Component, 
        data: {
          title: 'Add Agency' 
        }
      },
      {
        path: 'addagent3',
        component: Addagent3Component, 
        data: {
          title: 'Add Agency' 
        }
      }, 
      {
        path: 'addrepoagent',
        component: AddrepoagentComponent, 
        data: {
          title: 'Add Repo Agency' 
        }
      },
      {
        path: 'addrepoagent2',
        component: Addrepoagent2Component, 
        data: {
          title: 'Add Repo Agency' 
        }
      },
      {
        path: 'addrepoagent3',
        component: Addrepoagent3Component, 
        data: {
          title: 'Add Repo Agency' 
        }
      },
      {
        path: 'repoagency',
        component: RepoagencyComponent, 
        data: {
          title: 'Repo Agency' 
        }
      },
      {
        path: 'viewrepoagent/:id',
        component: ViewrepoagentComponent, 
        data: {
          title: 'View Repo Agency' 
        }
      }, 
      {
        path: 'repossessed',
        component: RepossessedComponent, 
        data: {
          title: 'Repossessed' 
        }
      }, 
      {
        path: 'repobroadcast',
        component: RepobroadcastComponent, 
        data: {
          title: 'Repo Broadcast' 
        }
      },
      {
        path: 'receivable',
        component: ReceivableComponent, 
        data: {
          title: 'Receivable Debt' 
        }
      },
      {
        path: 'editagent',
        component: EditagentComponent, 
        data: {
          title: 'Edit Agency' 
        }
      },
      {
        path: 'editagent2',
        component: Editagent2Component, 
        data: {
          title: 'Edit Agency' 
        }
      },
      {
        path: 'editagent3',
        component: Editagent3Component, 
        data: {
          title: 'Edit Agency' 
        }
      }, 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], 
  exports: [RouterModule]
})
export class ComponentsRoutingModule {}
