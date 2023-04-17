import { Component, Input } from '@angular/core';
import { DeveloperRatingService } from '../service/developer-rating.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
   
})
export class UserComponent {
  @Input() name = ''
  @Input() status = ''
  @Input() img = ''
  groupName = '';
  
  constructor(public developerRatingService: DeveloperRatingService) { }


  replaceName(value: string) {
    this.name = value;
    
  }
  replaceStatus(value: any) {
    this.status = value;
    
  }
}



  

