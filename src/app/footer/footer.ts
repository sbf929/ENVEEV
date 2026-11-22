import { Component } from '@angular/core';
import { ContactFormService } from '../services/contact-form';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-footer',
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer{

  constructor (
    private contactService: ContactFormService
  ){}

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

    // Contact Form: TO BE MOVED later to ContactForm component when it's made
    private name: string = "";
    private email: string = "";
    private org: string = "";
    private service: string = "";
    private scope: string = "";

    onSubmit() {
      const data = {
        name: this.name,
        email: this.email,
        org: this.org,
        service: this.service,
        scope: this.scope
      };

      this.contactService.submitContact(data).subscribe({
        next: (response) => {
          console.log('Submitted!', response);
          this.name="";
          this.email="";
          this.org="";
          this.service="";
          this.scope="";
        },

        error: (error) => {
          console.error('Submission Failed..', error);
        }
      })
    }
  
}
