import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {HttpService} from '../../shared/services/http.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
    selector: 'app-exams',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
    animations: [routerTransition()]
})
export class UsersComponent implements OnInit {
    userList = [];
    usersHeaders=[
        {
            key:'name',
            value:'نام'
        },
        {
            key:'description',
            value:'توضیحات'
        },
        {
            key:'level',
            value:'سطح'
        },
        {
            key:'field',
            value:'رشته'
        },
        {
            key:'post',
            value:'سمت'
        },
        {
            key:'average',
            value:'معدل'
        },
        {
            key:'registeryDate',
            value:'تاریخ ثبت نام'
        },
        {
            key:'numberOfExams',
            value:'تعداد آزمون ها'
        },
        {
            key:'numberOfRoadMaps',
            value:'تعداد مسیر راه'
        },
        {
            key:'isActive',
            value:'فعال'
        },
    ];
    constructor(private httpService: HttpService,
                private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.getUserList();
    }

    getUserList() {
        this.httpService.get(`user/`).subscribe(
            (result => {
                this.userList = result.data;
                this.userList.map(user=>{
                    user.logo=user.avatar;
                    return user;
                })
            })
        );
    }

    loadUserDetails(userId) {
        this.router.navigate([`/users/${userId}`]);
    }
}
