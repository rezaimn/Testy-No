import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {routerTransition} from '../../router.animations';
import {AuthenticationService} from '../../shared/services/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    login = {
        username: '',
        password: '',
        timeout: 30,
        tokenCount: 1
    };

    constructor(
        private authenticationService: AuthenticationService,
        public router: Router
    ) {
    }

    ngOnInit() {
    }

    onLogin() {
        this.authenticationService.login('auth', this.login).subscribe(
            (result => {
                localStorage.setItem('token', result.data.token.key);
                localStorage.setItem('isLoggedin', 'true');
                localStorage.setItem('username', result.data.token.user.name);
                this.router.navigate(['/dashboard']);
            })
        );

    }
}
