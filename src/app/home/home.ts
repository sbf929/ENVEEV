import { Component } from '@angular/core';
import { ɵEmptyOutletComponent } from '@angular/router';
import { ActionButton } from '../action-button/action-button';


@Component({
  imports: [ɵEmptyOutletComponent, ActionButton],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
