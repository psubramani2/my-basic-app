import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppChildComponent } from './app-child/app-child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AppChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  courseTitle = '@Input and @Ouput - Decorators';
  parent_Message='Hello from Parent';
  return_message='';

  handleEvent(data:any) {
    this.return_message=data;
  }
}
