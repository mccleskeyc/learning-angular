import { Component, OnInit } from '@angular/core';

// decorator 
@Component({
    selector: 'filter-textbox',
    template: `
        Filter: <input type="text" />
    `
})
export class FilterTextBoxComponent implements OnInit {
    constructor() {}

    ngOnInit() {
        
    }
}