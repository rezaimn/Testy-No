import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../../router.animations';
import {HttpService} from '../../../shared/services/http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../../../shared/services/data.service';


@Component({
    selector: 'app-exams',
    templateUrl: './exams.component.html',
    styleUrls: ['./exams.component.scss'],
    animations: [routerTransition()]
})
export class ExamsComponent implements OnInit {
    examList = [];
    roadMapId=0;
    examsHeaders=[
        {
            key:'title',
            value:'عنوان'
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
            key:'totalQuestions',
            value:'تعداد کل سوالات'
        },
        {
            key:'answerdQuestions',
            value:'پاسخ داده شده'
        },
        {
            key:'startTime',
            value:'تاریخ شروع'
        },
        {
            key:'bestTimeToAnswer',
            value:'زمان پاسخگویی'
        },
        {
            key:'isPassed',
            value:'پاس شده'
        },
        {
            key:'isActive',
            value:'فعال'
        },
    ];

    constructor(private httpService: HttpService, private dataService:DataService,
                private router: Router,
                private route: ActivatedRoute) {
        this.route.params.subscribe(
            (params => {
                this.roadMapId = params['roadId'];
                this.getExamList();
            })
        );
    }

    ngOnInit() {
        this.dataService.prevRoute=this.router.url;
    }

    getExamList() {
        this.httpService.get(`exam/${this.roadMapId}`).subscribe(
            (result => {
                this.examList = result.data;
            })
        );
    }

    loadExamDetails(examId) {
        this.router.navigate([`/road-maps/${this.roadMapId}/exams/${examId}/take-exam`]);
    }
}
