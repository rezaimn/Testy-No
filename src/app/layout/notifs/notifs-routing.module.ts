import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotifsComponent } from './notifs.component';

const routes: Routes = [
    {
        path: '', component: NotifsComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NotifsRoutingModule {
}
