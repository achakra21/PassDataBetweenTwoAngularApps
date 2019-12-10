import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';

  constructor(){
    
  }

  goToNextPage(){

    window.location.href = 'http://localhost:1338/'
    alert(1)
    
  }


}
