import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotifsRoutingModule} from './notifs-routing.module';
import {NotifsComponent} from './notifs.component';
import {StatModule} from '../../shared';
import {SharedModule} from '../../shared/modules/shared.module';

@NgModule({
    imports: [
        CommonModule,
        NotifsRoutingModule,
        StatModule,
        SharedModule,
    ],
    declarations: [
        NotifsComponent,
    ]
})
export class NotifsModule {
}
