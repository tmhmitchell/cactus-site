import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { ApiClientService } from './api-client.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent {
    title: string = 'cactus-site';
    percentageHydration: string = "0";

    constructor(private apiClient: ApiClientService) { }

    ngOnInit() {
        const everySecond = interval(1000);

        let subscription = everySecond.subscribe(_ => {
            this.apiClient.getHydration().subscribe(
                data => {
                    // Data comes to us as a value between 0 and 1
                    this.setHydration((data.hydration * 100).toFixed(0))
                },
                _ => { subscription.unsubscribe() }
            )
        })
    }

    setHydration(newHydration: string) {
        this.percentageHydration = newHydration;
    }
}
