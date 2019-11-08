import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../../router.animations';
import {HttpService} from '../../../shared/services/http.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
    selector: 'app-exams',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.scss'],
    animations: [routerTransition()]
})
export class UserDetailsComponent implements OnInit {
    userId=0;
    userDetails:any;
    constructor(private httpService: HttpService,
                private router: Router,
                private route: ActivatedRoute) {
        this.route.params.subscribe(
            (params => {
                this.userId = params['userId'];
                this.getUserDetails();
            })
        );
    }

    ngOnInit() {

    }

    getUserDetails() {
        this.httpService.get(`user/${this.userId}`).subscribe(
            (result => {
                this.userDetails = result.data;
            })
        );
    }

}
