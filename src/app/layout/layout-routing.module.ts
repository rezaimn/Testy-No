import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './layout.component';


const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {path: '', redirectTo: 'dashboard', pathMatch: 'prefix'},
            {path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
            {path: 'road-maps', loadChildren: () => import('./road-maps/road-maps.module').then(m => m.RoadMapsModule)},
            {path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule)},
            {path: 'notifs', loadChildren: () => import('./notifs/notifs.module').then(m => m.NotifsModule)},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {
}
