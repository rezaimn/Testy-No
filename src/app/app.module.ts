import {CommonModule} from '@angular/common';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthGuard} from './shared';
import {HttpService} from './shared/services/http.service';
import {EventEmitterService} from './shared/services/event-emitter.service';
import {AlertMessageService} from './shared/services/alert-message.service';
import {AuthenticationService} from './shared/services/authentication.service';
import {FormsModule} from '@angular/forms';
import {SharedModule} from './shared/modules/shared.module';
import {DataService} from './shared/services/data.service';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        SharedModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    declarations: [AppComponent],
    providers: [
        AuthGuard,
        AlertMessageService,
        EventEmitterService,
        DataService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
