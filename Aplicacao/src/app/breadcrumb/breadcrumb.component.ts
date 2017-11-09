import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'breadcrumb',
    templateUrl: './breadcrumb.component.html'
})
export class BreadcrumbComponent {
    router: Router
    url = [];
    
    constructor(router: Router) {
        this.router = router;

        this.router.events
            .subscribe((e: NavigationStart) => {
                this.url = e.url.split('/').filter(item => item != "");
                if(this.url.length > 3) this.url = this.url.slice(0, 3);
            });
    }

    getPath(link: string) {
        return '/' + this.url.slice(0, this.url.indexOf(link)+1).toString().replace(/,/g, '/');
    }

    isLast(link: string) {
        return this.url.indexOf(link) + 1 == this.url.length;
    }
}