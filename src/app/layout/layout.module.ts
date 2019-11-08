import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';

import {LayoutRoutingModule} from './layout-routing.module';
import {LayoutComponent} from './layout.component';
import {SidebarComponent} from '../shared/components/sidebar/sidebar.component';
import {HeaderComponent} from '../shared/components/header/header.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {LayoutHttpInterceptor} from '../shared/interceptors/layout-http.interceptor';
import {SharedModule} from '../shared/modules/shared.module';


@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        NgbDropdownModule,
        SharedModule
    ],
    declarations: [
        LayoutComponent,
        SidebarComponent,
        HeaderComponent
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: LayoutHttpInterceptor, multi: true}
    ]
})
export class LayoutModule {
}
