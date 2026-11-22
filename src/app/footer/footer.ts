import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-footer',
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer{
  external_links = [
    {
      icon: "bi bi-linkedin",
      link: "", // Link to the site page
    },

    {
      icon: "bi bi-youtube",
      link: ""
    },

    {
      icon: "bi bi-facebook",
      link: ""
    }
  ]
}
