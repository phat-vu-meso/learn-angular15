import { OnInit, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public name = 'Phat';
    public age = 18;


    constructor() { }
  
    ngOnInit(): void {
    }

    public resetName(): void {
      console.log('resetName');
      this.name = '';
    }
}
