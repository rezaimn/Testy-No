import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamsComponent } from './exams.component';

const routes: Routes = [
    {
        path: '', component: ExamsComponent,
    },
    {path: ':examId/take-exam', loadChildren: () => import('./take-exam/take-exam.module').then(m => m.TakeExamModule)}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExamsRoutingModule {
}
