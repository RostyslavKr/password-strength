import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css']
})
export class PasswordStrengthComponent implements OnInit {

  password: string = "";
  passwordStrength: string = "";

  constructor() { }

  ngOnInit() {
  }

  onPasswordChange() {
    this.passwordStrength = this.calculatePasswordStrength(this.password);
  }

  calculatePasswordStrength(password: string) {
    // Create a regular expression to check if the password contains letters, digits, and symbols.
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    // Check if the password matches the regular expression.
    if (regex.test(password)) {
      return "strong";
    } else if (password.length >= 8 && (password.match(/[a-z]/g) || password.match(/[A-Z]/g)) && (password.match(/[0-9]/g) || password.match(/[^a-zA-Z0-9]/g))) {
      return "medium";
    } else {
      return "easy";
    }
  }

}