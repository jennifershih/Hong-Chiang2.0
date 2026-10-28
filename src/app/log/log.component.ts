import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-log',
  templateUrl: './log.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./log.component.scss'],
})
export class LogComponent {}
