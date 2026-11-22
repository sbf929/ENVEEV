import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-project-card',
  styleUrl: './project-card.css',
  templateUrl: './project-card.html',
})

export class ProjectCard{
  imageLink = input<string>('...');
  title = input<string>('Service Card Title');
  description = input<string>('About Service.');
  achievement = input<string>('');
  complaince = input<string>('');

}
