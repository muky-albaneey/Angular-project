import {Component} from '@angular/core';


@Component({
  selector : 'app-navbar',
  standalone : true,
  template : `<h1>Alhamdullilah am at top nav</h1>
    <p>Inshaa Allah ill master angular before monday</p>
    <button>submit</button>
  `,
  styles : `h1{color:red; background:green}`,
  templateUrl :'./navbar.component.html',
  styleUrl : './navbar.component.css'
})


export class AppNavbar{

}

