import { Component } from '@angular/core';
import { ServiceCard } from '../service-card/service-card';

interface Service {
    icon: string;
    title: string;
    description: string;
    points: string[];
    color1: string;
    color2: string;
}

@Component({
    imports: [ServiceCard],
    selector: 'app-services',
    styleUrl: './services.css',
    templateUrl: './services.html',
})

export class Services {
  
  services = [
    {
      icon: "bi bi-tools",
      title: "Energy Engineering & Audits",
      description: "Optimizing industrial and commercial energy consumption through comprehensive system audits, efficiency upgrades, and smart load management to lower operational costs.",
      points: [
        "Investment-grade energy audits (ASHRAE Levels I, II & III)",
        "Industrial process optimization & waste heat recovery",
        "HVAC, compressed air, and thermal system retrofits",
        "ISO 50001 Energy Management System (EnMS) implementation"
      ],
      color1: "#FFD580",
      color2: "#DC4D01"
    },

    {
      icon: "bi bi-lightning-charge-fill",
      title: "Renewable Energy & Microgrids",
      description: "•  Designing and integrating resilient solar, wind, and battery storage microgrids that reduce grid dependency and power clean energy transitions.",
      points: [
        "Feasibility studies & site resource assessments (Solar PV, Wind, Biomass, Green Hydrogen)",
        "Behind-the-meter generation & Battery Energy Storage Systems (BESS)",
        "Grid interconnection studies, owner’s engineering, and procurement support"
      ],
      color1: "#FFEE8C",
      color2: "#F6BE00 "
    },

    {
      icon: "bi bi-tree-fill",
      title: "Environmental Impact & Compliance",
      description: "Guiding organizations through environmental impact assessments (EIAs), regulatory permitting, and ongoing monitoring to ensure full legal compliance and risk mitigation.",
      points: [
        "Environmental & Social Impact Assessments (ESIA / EIA)",
        "Statutory permitting, environmental clearances, and compliance audits",
        "Air quality dispersion modeling, noise mapping, and stack emission monitoring",
        "ISO 14001 Environmental Management System advisory"
      ],
      color1: "#90EE90",
      color2: "#008000"
      
    },

    {
      icon: "bi bi-droplet-fill",
      title: "Water, Wastewater & Waste Management",
      description: "Implementing sustainable water treatment, circular wastewater recycling, and zero-waste-to-landfill strategies that conserve resources and minimize pollution.",
      points: [
        "Industrial Effluent Treatment Plant (ETP) & Sewage Treatment Plant (STP) design",
        "Zero Liquid Discharge (ZLD) feasibility and water pinch analysis",
        "Solid & hazardous waste management, circular economy, and Waste-to-Energy (WtE)"
      ],
      color1: "#AFEEEE",
      color2: "#00B7EB"
    },

    {
      icon: "bi bi-cloud-fill",
      title: "ESG, Carbon & Climate Advisory",
      description: "Helping businesses measure greenhouse gas emissions, set science-based net-zero targets, and build transparent ESG reporting frameworks for long-term resilience.",
      points: [
        "Scope 1, 2, and 3 Greenhouse Gas (GHG) accounting & verification",
        "Science-Based Targets (SBTi) & Net-Zero transition roadmaps",
        "Life Cycle Assessment (LCA) and climate risk/vulnerability assessments"
      ],
      color1: "#C3B1E1",
      color2: "#7851A9"
    },
  ];
}
