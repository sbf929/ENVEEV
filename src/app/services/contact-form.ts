import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ContactFormService{
    
    private apiUrl = environment.apiUrl;

    constructor (private http:HttpClient) {}

    submitContact(formData: {
        name: string;
        email: string;
        org: string;
        service: string;
        scope: string;

    }){
        console.log("Submitted: ", formData);

        return this.http.post(
            `${this.apiUrl}/contact`,
            formData
        );
    }
}