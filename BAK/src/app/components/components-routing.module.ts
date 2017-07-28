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
import { AgencyComponent } from './agency.component';
import { ViewagentComponent } from './viewagent.component';
import { RepoComponent } from './repo.component';

import { ViewrepoComponent } from './viewrepo.component'; 
import { AddagentComponent } from './addagent.component'; 
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



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Components'
    },
    children: [
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
          title: 'Expired' 
        }
      },
      {
        path: 'changeagent/:id',
        component: ChangeagentComponent, 
        data: {
          title: 'Expired' 
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
