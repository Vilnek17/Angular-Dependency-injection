import { DeveloperRatingService } from './service/developer-rating.service';
import { PopUpComponent } from './pop-up/pop-up.component';
import { Component, ViewChild, ViewContainerRef, ComponentRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DeveloperRatingService ]
})
export class AppComponent {
  users: any[];

  constructor(
    public developerRatingService: DeveloperRatingService){
      this.users = this.developerRatingService.getUsers();
    }
    @ViewChild('popUp', { read: ViewContainerRef })
    private viewRef!: ViewContainerRef
    private componentRef!: ComponentRef<PopUpComponent>
 
  showPopUp() {
    this.componentRef = this.viewRef.createComponent(PopUpComponent);
    this.componentRef.instance.name = this.developerRatingService.group;
    this.componentRef.instance.members = this.users.length;

    this.componentRef.instance.close.subscribe(() => { this.viewRef.clear() });
  }

}
