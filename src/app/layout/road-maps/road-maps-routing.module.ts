import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RoadMapsComponent} from './road-maps.component';

const routes: Routes = [
    {
        path: '', component: RoadMapsComponent,
    },
    {path: ':roadId/exams', loadChildren: () => import('./exams/exams.module').then(m => m.ExamsModule)}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoadMapsRoutingModule {
}
