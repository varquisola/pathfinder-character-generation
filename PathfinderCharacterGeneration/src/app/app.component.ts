﻿import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

import { CharacterService } from './character.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    constructor(private router: Router, public characterService: CharacterService) {
    };
}

/*
export class AppComponent implements OnInit {
    constructor(private _httpService: Http) { }

    apiValues: string[] = [];
    ngOnInit() {
        this._httpService.get('/api/values').subscribe(values => {
            this.apiValues = values.json() as string[];
        });
    }
}
*/