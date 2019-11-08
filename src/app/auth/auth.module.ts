import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {AuthRoutingModule} from './auth-routing.module';
import {AuthComponent} from './auth.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from '../shared/interceptors/auth.interceptor';
import {LogOutComponent} from './log-out/log-out.component';
import {SharedModule} from '../shared/modules/shared.module';


@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule,
    ],
    declarations: [AuthComponent, LogOutComponent],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
    ]
})
export class AuthModule {
}
