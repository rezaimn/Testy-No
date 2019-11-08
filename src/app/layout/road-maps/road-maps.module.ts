import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbCarouselModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

import {RoadMapsRoutingModule} from './road-maps-routing.module';

import {ChartsModule as Ng2Charts} from 'ng2-charts';

import {StatModule} from '../../shared';
import {SharedModule} from '../../shared/modules/shared.module';
import {RoadMapsComponent} from './road-maps.component';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        RoadMapsRoutingModule,
        StatModule,
        SharedModule,
        Ng2Charts
    ],
    declarations: [
        RoadMapsComponent
    ]
})
export class RoadMapsModule {
}
