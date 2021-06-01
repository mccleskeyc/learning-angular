import { Component, OnInit } from '@angular/core';

//Decorator
@Component({ 
  selector: 'app-root', //first thing that runs when we run the page, a tag in our index.html
  template: `
    <h1>{{title}}</h1>
  `
})

export class AppComponent implements OnInit {
  //OnInit provides an interface of rules
  title: string | undefined;
  constructor() { }

  ngOnInit() {
    //required for OnInit
    //initializes component (title) with data
    this.title = 'Hello World'
  }
  
}