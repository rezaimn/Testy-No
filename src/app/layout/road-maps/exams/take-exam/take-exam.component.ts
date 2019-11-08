import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../../../router.animations';
import {HttpService} from '../../../../shared/services/http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, interval} from 'rxjs';
import {DataService} from '../../../../shared/services/data.service';

// import {Interval} from 'rxjs/observable/interval';

@Component({
    selector: 'app-take-exam',
    templateUrl: './take-exam.component.html',
    styleUrls: ['./take-exam.component.scss'],
    animations: [routerTransition()]
})
export class TakeExamComponent implements OnInit {
    selectedExam;
    timer: string = '';
    examId = 0;
    currentQuestion;
    answer = [];
    response = [];
    timerInterval;

    constructor(
        private httpService: HttpService,
        private dataService:DataService,
        private route: ActivatedRoute, private router: Router
    ) {
        this.route.params.subscribe(
            (params => {
                this.examId = params['examId'];
                this.getExamDetails(this.examId);
            })
        );
    }

    ngOnInit() {
        this.nextQuestion();
    }

    getExamDetails(id) {
        this.httpService.get(`exam/detail/${id}`).subscribe(
            (result => {
                this.selectedExam = result.data;
            })
        );
    }

    nextQuestion() {
        this.httpService.get(`question/${this.examId}`).subscribe(
            (result => {
                this.currentQuestion = result.data;
                this.calculateRemainedTime(result.data.remainingTime);
            })
        );
    }

    setResponse(id, status) {
        if (status) {
            this.response.push(id);
        } else {
            let index = this.response.indexOf(id);
            this.response.splice(index, 1);
        }
    }

    answerTheQuestion(currentQuestion) {
        let body = {
            id: currentQuestion.id,
            resp: [...this.response]
        };
        this.answer = [];
        this.httpService.put(`question`, body).subscribe(
            (result => {
                this.nextQuestion();
            })
        );
    }

    calculateRemainedTime(time: number) {
        let timeTemp = time;
        if (this.timerInterval) {
            this.timerInterval.unsubscribe();
        }
        this.timerInterval = interval(1000).subscribe(
            val => {
                let hours = Math.floor(timeTemp / 3600);
                let mins = Math.floor((timeTemp % 3600) / 60);
                let secs = timeTemp % 60;
                this.timer = ((hours > 0) ? (hours + ':') : '') + ((mins > 0) ? (mins + ':') : '') + ((secs > 0) ? (secs + '') : '');
                --timeTemp;
                if (hours === 0 && mins === 0 && secs === 0) {
                    this.timerInterval.unsubscribe();
                }
            }
        );
    }

    back() {
        this.router.navigate([this.dataService.prevRoute]);
    }
}
