import { Component } from '@angular/core';
import { CarPart } from './car-part';
import { CARPARTS } from './mocks';

@Component({
  selector: 'car-parts',
  templateUrl: 'app/car-parts.component.html',
    styleUrls: ['app/car-parts.component.css']
})
export class CarPartsComponent {
    title = 'Ultra Racing';
    carParts: CarPart[];

    ngOnInit() {
        this.carParts = CARPARTS;
    }

    totalCarParts() {
        let sum = 0;
        for (let carPart of this.carParts) {
            sum++;
        }
        return sum;
    }
 }
