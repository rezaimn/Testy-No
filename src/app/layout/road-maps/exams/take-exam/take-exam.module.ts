import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TakeExamRoutingModule} from './take-exam-routing.module';
import {TakeExamComponent} from './take-exam.component';
import {StatModule} from '../../../../shared';
import {SharedModule} from '../../../../shared/modules/shared.module';

@NgModule({
    imports: [
        CommonModule,
        TakeExamRoutingModule,
        StatModule,
        SharedModule,
    ],
    declarations: [
        TakeExamComponent,
    ]
})
export class TakeExamModule {
}
