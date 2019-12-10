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

    
    alert(1)

    var domain = 'http://localhost:1338/';
    alert(1)

    //var domain = 'http://localhost:1338/';
//create popup window


var myPopup = window.open(domain);

//periodical message sender
setInterval(function(){
	var message = 'current time: ' + (new Date().getTime());
	console.log('blog.local:  sending message:  ' + message);
  myPopup.postMessage(message,domain);
   //send the message and target URI
   //window.location.href = 'http://localhost:1338/'
},6000);

//listen to holla back
window.addEventListener('message',function(event) {
  debugger
	if(event.origin !== 'http://localhost:1337/') return;
	console.log('received response:  ',event.data);
},false);

    
  }


  

//periodical message sender

// 	var message = 'Hello!  The time is: ';
// 	console.log('blog.local:  sending message:  ' + message);
// 	window.postMessage(message,domain); //send the message and target URI


// //listen to holla back
// window.addEventListener('message',function(event) {
// 	if(event.origin !== 'http://localhost:1337/') return;
// 	console.log('received response:  ',event.data);
// },false);

// 
    
  //}


}
