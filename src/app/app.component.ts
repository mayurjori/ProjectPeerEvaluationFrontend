import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PeerEvaluationFrontEnd';
  username = '';
  password ='';

  signIn(){
    console.log("Clicked");
  }
}
