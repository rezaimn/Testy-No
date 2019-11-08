import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';

import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './login.component';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/modules/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        LoginRoutingModule,
        TranslateModule.forChild()
    ],
    declarations: [LoginComponent]
})
export class LoginModule {
}
