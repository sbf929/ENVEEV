import { Component } from '@angular/core';
import { ProjectCard } from '../project-card/project-card';

@Component({
  imports: [ProjectCard],
  selector: 'app-projects',
  styleUrl: './projects.css',
  templateUrl: './projects.html',
})
export class Projects{
  projects = [
    {
      imageLink: "images/cookstove.jpeg",
      title: "Cookstove",
      description: "Designed and commissioned a hybrid rooftop solar and 8MWh lithium-iron-phosphate battery storage microgrid, eliminating peak demand charges.",
      achivement: "...",
      complaince: "..."
    },

    {
      imageLink: "images/biomass.png",
      title: "Biomass Boiler CC",
      description: "Biomass is organic material from living or recently living organisms—such as plants, animals, and microorganisms—used both to measure living matter in ecosystems and as a renewable energy source",
      achivement: "...",
      complaince: "..."
    }
  ]
}
