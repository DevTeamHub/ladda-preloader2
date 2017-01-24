import {Component, OnInit, Input, ElementRef, ViewEncapsulation} from '@angular/core';

declare var require: any;

@Component({
    selector: '[ladda-preloader]',
    template: `<button class="ladda-button" 
                [class.preloader]="inProgress" 
                (click)="click()" 
                data-style="zoom-out" 
                data-spinner-color="white">
                    <span class="ladda-label">{{label}}</span>
                    <span></span>
                    <ng-content></ng-content>
                </button>`,
    encapsulation: ViewEncapsulation.None
})

export class LaddaPreloader2Component implements OnInit {
    @Input() operation: any;
    @Input() color: string = 'white';
    @Input() style: string = 'zoom-out';
    @Input() label: string = '';

    private inProgress: boolean;
    private laddaElement: any;
    
    private Ladda: any = require('node_modules/ladda/dist/ladda.min.js');

    constructor(private element: ElementRef) {
    }

    ngOnInit() {
        this.laddaElement = this.Ladda.create(this.element.nativeElement.getElementsByTagName('button')[0]);
    }

    click() {
        this.start();

        let promise = this.operation;
        if (promise) {
            promise.then(() => this.stop(), () => this.stop());
        } else {
            this.stop();
        }
    };

    start() {
        this.inProgress = true;
        this.laddaElement.start();
    }

    stop() {
        this.laddaElement.stop();
        this.inProgress = false;
    }
}

