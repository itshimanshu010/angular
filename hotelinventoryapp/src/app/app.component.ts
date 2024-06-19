import { Component } from '@angular/core';

@Component({
  selector: 'hinv-root', //app-root,app was prefix define in angular.json
  //but i change it into hinv-root by changing in angular (angular.json)
  //by changing here go and change in main index.html
  templateUrl: './app.component.html', //this is spearate html file
 
  //or
  // template:`<h1>Hotel Inventory App</h1> 
  // <p>This is just</p>`,


  styleUrls: ['./app.component.css'], //this is separate css file
  //or
   styles:[`h1{color:red}`],  //this is inline css
})
export class AppComponent {
  title = 'hotelinventoryapp';

  // role = 'Admin';
  // role = 'User';
  // role = '';

}
