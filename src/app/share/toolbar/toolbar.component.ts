import { Component } from '@angular/core';
import links from './nav-items';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  showFiller = false;

  links = links;
}
