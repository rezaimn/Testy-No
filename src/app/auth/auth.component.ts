import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

/**
 * @ignore
 */
@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {
    constructor(private translate: TranslateService) {
      this.translate.setDefaultLang('fa');
    }

    ngOnInit() {
    }

}
