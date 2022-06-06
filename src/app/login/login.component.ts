import { Component, OnInit } from '@angular/core';
import { faFacebookF, faGoogle, faTwitter, faGithub} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  iconFacebook = faFacebookF;
  iconTwitter = faTwitter;
  iconGoogle = faGoogle;
  iconGithub = faGithub;
  constructor() { }

  ngOnInit(): void {
  }

}
