import { Component, Input, OnInit } from '@angular/core';
import { NbComponentStatus } from '@nebular/theme';

@Component({
  selector: 'app-button-testing',
  templateUrl: './button-testing.component.html',
  styleUrls: ['./button-testing.component.css'],
})
export class ButtonTestingComponent implements OnInit {
  @Input() status: NbComponentStatus = 'primary';

  ngOnInit() {}
}
