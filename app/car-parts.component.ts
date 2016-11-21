import { Component } from '@angular/core';
@Component({
  selector: 'car-parts',
  templateUrl: 'app/car-parts.component.html',
    styleUrls: ['app/car-parts.component.css']
})
export class CarPartsComponent {
    title = 'Ultra Racing';
    carParts = [
        { "id": 1,
        "name": "Super Tires",
        "description": "There tires are the very best. ",
        "inStock": 5,
        "price": 4.99 },
        { "id": 2,
        "name": "Super Wires",
        "description": "There wires are the very best. ",
        "inStock": 0,
        "price": 9.49 }
    ];

    totalCarParts() {
        let sum = 0;
        for (let carPart of this.carParts) {
            sum++;
        }
        return sum;
    }
 }
