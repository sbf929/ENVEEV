import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-methodology',
  styleUrl: './methodology.css',
  templateUrl: './methodology.html',
})
export class Methodology{
  steps = [
    {
      number: '01',
      title: 'Baseline Assessment & Diagnostics',
      description: 'Comprehensive site surveys, metering, sampling, and data logging to establish accurate performance and compliance baselines.'
    },

    {
      number: '02',
      title: 'Engineering & Techno-Economic Modeling',
      description: 'Simulation of technical interventions with detailed CAPEX, OPEX, payback period, and carbon abatement calculations.'
    },

    {
      number: '03',
      title: 'Detailed Design & Tendering',
      description: 'Preparation of engineering drawings, technical specifications, and vendor-neutral Bid/RFP packages.'
    },

    {
      number: '04',
      title: 'Implementation & Owner\'s Engineering',
      description: 'Construction supervision, quality assurance, testing, and commissioning support.'
    },

    {
      number: '05',
      title: 'Measurement & Verification (M&V)',
      description: 'Post-implementation performance tracking (IPMVP protocols) and ongoing statutory compliance reporting.'
    }
  ]
}
