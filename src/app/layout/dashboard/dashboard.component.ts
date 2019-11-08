import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {HttpService} from '../../shared/services/http.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    dashboardData;
    openExamHeaders=[
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

    finishedExamHeaders=[...this.openExamHeaders];
    roadMapExamHeaders=[
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
            key:'startTime',
            value:'تاریخ شروع'
        },
        {
            key:'score',
            value:'امتیاز'
        },
        {
            key:'isActive',
            value:'فعال'
        },
    ]
    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true,
    };
    public examHistoriesColor: Array<any> = [
        {
            // dark grey
            backgroundColor: 'rgba(255,42,44,.8)',
            borderColor: 'rgb(255,42,44)',
            pointBackgroundColor: 'rgba(255,42,44,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,42,44,1)'
        },
    ];
    public advancementSpeedColor: Array<any> = [
        {
            // grey
            backgroundColor: 'rgba(24,97,255,.8)',
            borderColor: 'rgba(24,97,255,1)',
            pointBackgroundColor: 'rgba(24,97,255,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(24,97,255,1)'
        }
    ];

    advancementSpeedBarChart = [
        {
            data: [],
            label: 'کارشناس سطح یک'
        }
    ];
    examHistoriesBarChart = [
        {
            data: [],
            label: 'تاریخجه آزمون ها'
        }
    ];

    public barChartType: string;
    public barChartLegend: boolean;

    constructor(private httpService: HttpService) {

    }

    ngOnInit() {
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.getDashboardData();
    }

    getDashboardData() {
        this.httpService.get('dash').subscribe(
            (result => {
                this.dashboardData = result.data;
                this.advancementSpeedBarChart = [
                    {
                        data: this.dashboardData.advancementSpeed.data,
                        label: 'کارشناس سطح یک'
                    }
                ];
                this.examHistoriesBarChart = [
                    {
                        data: this.dashboardData.examHistories.data,
                        label: 'تاریخچه آزمون ها'
                    }
                ];
            })
        );
    }
}
