import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../shared/services/http.service';
import {routerTransition} from '../../router.animations';
import {Router} from '@angular/router';

@Component({
    selector: 'app-road-maps',
    templateUrl: './road-maps.component.html',
    styleUrls: ['./road-maps.component.scss'],
    animations: [routerTransition()]
})
export class RoadMapsComponent implements OnInit {
    roadMapList = [];

    constructor(private httpService: HttpService,private router:Router) {
    }

    ngOnInit() {
        this.getRoadMaoList();
    }

    getRoadMaoList() {
        this.httpService.get('road').subscribe(
            (result => {
                this.roadMapList = result.data;
            })
        );
    }
    loadExamList(roadId){
        this.router.navigate([`road-maps/${roadId}/exams`]);
    }
}
