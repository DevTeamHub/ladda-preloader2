import { Component } from "@angular/core";

@Component({
    selector: 'my-app',
    template: `
        <h3>Ladda Preloader Wrapper Demo</h3>
        
        <div ladda-preloader [operation]="click()" label="click me"></div>
    `
})
export class AppComponent {
    click() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 3000);
        });
    }
}