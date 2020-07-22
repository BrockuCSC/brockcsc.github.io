import { RouterModule, Routes } from '@angular/router';
import { FoodItemsComponent } from 'app/admin/food/foodItems.component';
import { HomeComponent } from 'app/admin/home/home.component';
import { FileManagerComponent } from 'app/shared/file-manager/file-manager/file-manager.component';
import { AdminComponent } from './admin.component';
import { AdminEventComponent } from './events/admin-event/admin-event.component';
import { EventsComponent } from './events/events.component';
import { ExecsComponent } from './execs/execs.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', component: HomeComponent },
      { path: 'execs', component: ExecsComponent },
      { path: 'events', component: EventsComponent },
      { path: 'events/:id', component: AdminEventComponent },
      { path: 'food', component: FoodItemsComponent },
      { path: 'files', component: FileManagerComponent },
      { path: '**', redirectTo: 'home' },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
