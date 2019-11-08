import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExamsRoutingModule} from './exams-routing.module';
import {ExamsComponent} from './exams.component';
import {StatModule} from '../../../shared';
import {SharedModule} from '../../../shared/modules/shared.module';

@NgModule({
    imports: [
        CommonModule,
        ExamsRoutingModule,
        StatModule,
        SharedModule,
    ],
    declarations: [
        ExamsComponent,
    ]
})
export class ExamsModule {
}
