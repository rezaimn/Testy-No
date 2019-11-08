import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {routerTransition} from '../../router.animations';
import {AuthenticationService} from '../../shared/services/authentication.service';

@Component({
    template: ``,
    selector: 'app-log-out'
})
export class LogOutComponent implements OnInit {

    constructor(
        private authenticationService: AuthenticationService,
        public router: Router
    ) {
        this.onLogout();
    }

    ngOnInit() {
    }

    onLogout() {
        this.authenticationService.logout('auth/logout').subscribe(
            (result => {
                localStorage.removeItem('isLoggedin');
                localStorage.removeItem('username');
                localStorage.removeItem('token');
                this.router.navigate(['/auth/login']);
            })
        );

    }
}
