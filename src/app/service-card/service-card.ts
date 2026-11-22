import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-service-card',
  styleUrl: './service-card.css',
  templateUrl: './service-card.html',
})
export class ServiceCard{
  icon = input<string>('...');
  title = input<string>('Service Card Title');
  description = input<string>('About Service.');
  points = input<string[]>([]);

  color1 = input<string>('#ffffff');
  color2 = input<string>('#000000');
}
