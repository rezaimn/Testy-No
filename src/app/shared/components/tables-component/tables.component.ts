import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
    @Input() tableTitle = '';
    @Input() tableData = [];
    @Input() headers = [];
    @Input() hasImg = false;

    @Input() edit = false;
    @Input() exam = false;
    @Input() delete = false;

    @Output() onEdit = new EventEmitter<any>();
    @Output() onExam = new EventEmitter<any>();
    @Output() onDelete = new EventEmitter<any>();

    constructor() {

    }

    ngOnInit() {
    }
    onEditSet(id){
        this.onEdit.emit(id);
    }
    onExamSet(id){
        this.onExam.emit(id);
    }
    onDeleteSet(id){
        this.onDelete.emit(id);
    }
}
