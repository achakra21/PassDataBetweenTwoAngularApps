import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-second-project';

  constructor(){
    alert(2)

    //respond to events
window.addEventListener('message',function(event) {
  debugger
	// if(event.origin !== 'http://localhost:1338/') return;
  console.log('message received:  ' + event.data,event);
  alert('message received:  ' + JSON.stringify(event.data))
	//event.source.postMessage('holla back youngin!',event.origin);
},false);
  }
}
