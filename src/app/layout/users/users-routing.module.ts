import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';

const routes: Routes = [
    {
        path: '', component: UsersComponent,
    },
    {path: ':userId', loadChildren: () => import('./user-details/user-details.module').then(m => m.UserDetailsModule)}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule {
}
