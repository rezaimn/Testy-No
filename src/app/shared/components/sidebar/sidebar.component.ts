import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import {interval} from 'rxjs';
import {HttpService} from '../../services/http.service';
import {DataService} from '../../services/data.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    isActive: boolean;
    collapsed: boolean;
    showMenu: string;
    pushRightClass: string;
    timerInterval;
    notifsCount=0;
    @Output() collapsedEvent = new EventEmitter<boolean>();

    constructor(
        private httpService:HttpService,
        private translate: TranslateService,
        private router: Router,
        private route:ActivatedRoute,
        public dataService:DataService
    ) {
        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
        this.getNotifs();
        this.isActive = false;
        this.collapsed = false;
        this.showMenu = '';
        this.pushRightClass = 'push-right';
        if (this.timerInterval) {
            this.timerInterval.unsubscribe();
        }
        this.timerInterval = interval(300000).subscribe(
            val => {
               this.getNotifs();
            }
        );
    }

    getNotifs() {
        this.httpService.get(`popup`).subscribe(
            (result => {
                if(this.router.url.includes('notif')){
                    this.dataService.notifCount=0;
                }else{
                    this.dataService.notifCount = result.data.length;
                }

            })
        );
    }
    eventCalled() {
        this.isActive = !this.isActive;
    }

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    toggleCollapsed() {
        this.collapsed = !this.collapsed;
        this.collapsedEvent.emit(this.collapsed);
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    changeLang(language: string) {
        this.translate.use(language);
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }
}
