import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbCarouselModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {ChartsModule as Ng2Charts} from 'ng2-charts';

import {StatModule} from '../../shared';
import {SharedModule} from '../../shared/modules/shared.module';

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        StatModule,
        SharedModule,
        Ng2Charts
    ],
    declarations: [
        DashboardComponent,
    ]
})
export class DashboardModule {
}
