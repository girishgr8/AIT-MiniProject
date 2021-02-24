import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
   states = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttarakhand", "Uttar Pradesh", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman & Diu", "The Government of NCT of Delhi", "Jammu & Kashmir", "Ladakh", "Lakshadweep", "Puducherry"]

   userModel = new User('', '', '', '', '', '', '', '', '', '', '+91', '');
   constructor() { }
  

   ngOnInit(): void {

  }

  
}
