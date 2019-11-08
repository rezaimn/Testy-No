import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {HttpService} from '../../shared/services/http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../../shared/services/data.service';


@Component({
    selector: 'app-notifs',
    templateUrl: './notifs.component.html',
    styleUrls: ['./notifs.component.scss'],
    animations: [routerTransition()]
})
export class NotifsComponent implements OnInit {
    notifList = [];
    notifsHeaders=[
        {
            key:'notif',
            value:'پیام'
        }
    ]
    constructor(private httpService: HttpService,
                private router: Router,
                private dataService:DataService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.getNotifList();
        this.dataService.notifCount=0;
    }

    getNotifList() {
        this.httpService.get(`popup`).subscribe(
            (result => {
                this.notifList = result.data;
                this.notifList=this.notifList.map(notif=>{
                    let notifT={
                        notif:notif
                    }
                    return notifT;
                })
            })
        );
    }

    loadUserDetails(userId) {
        this.router.navigate([`/users/${userId}`]);
    }
}
