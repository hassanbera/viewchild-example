import { Component,ViewChild} from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
// ViewChild ile ChildComponenet referansını alıyoruz.
@ViewChild(ChildComponent) child!: ChildComponent;

// ChildComponent'e bir metod çağrıyoruz.
updateChildMessage(){
  this.child.changeTitle('Message from Parent');
}
}
