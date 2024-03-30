import { Component,EventEmitter,Input, Output } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [AppComponent],
  templateUrl: './app-child.component.html',
  styleUrl: './app-child.component.css'
})
export class AppChildComponent {
  @Input() inputData:any;
  @Output() eventEmitter = new EventEmitter<any>();

  returnMessage(){
    this.eventEmitter.emit('we received your message--> The message is '+this.inputData);
  }
}
