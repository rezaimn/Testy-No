import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserDetailsRoutingModule} from './user-details-routing.module';
import {UserDetailsComponent} from './user-details.component';
import {StatModule} from '../../../shared';
import {SharedModule} from '../../../shared/modules/shared.module';

@NgModule({
    imports: [
        CommonModule,
        UserDetailsRoutingModule,
        StatModule,
        SharedModule,
    ],
    declarations: [
        UserDetailsComponent,
    ]
})
export class UserDetailsModule {
}
