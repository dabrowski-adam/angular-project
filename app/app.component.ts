import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
    <ul>
        <li *ngFor="let carPart of carParts">
            <h2>{{carPart.name}}</h2>
            <p>{{carPart.description}}</p>
            <p *ngIf="carPart.inStock > 0">{{carPart.inStock}} in stock</p>
            <p *ngIf="carPart.inStock === 0">Out of stock</p>
        </li>
    </ul>`
})
export class AppComponent {
    title = 'Ultra Racing';
    carParts = [
        { "id": 1,
        "name": "Super Tires",
        "description": "There tires are the very best. ",
        "inStock": 5 },
        { "id": 2,
        "name": "Super Wires",
        "description": "There wires are the very best. ",
        "inStock": 0 }
    ];
 }
