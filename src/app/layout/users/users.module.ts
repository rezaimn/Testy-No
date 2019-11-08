import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersRoutingModule} from './users-routing.module';
import {UsersComponent} from './users.component';
import {StatModule} from '../../shared';
import {SharedModule} from '../../shared/modules/shared.module';

@NgModule({
    imports: [
        CommonModule,
        UsersRoutingModule,
        StatModule,
        SharedModule,
    ],
    declarations: [
        UsersComponent,
    ]
})
export class UsersModule {
}
