import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  inject,
} from '@angular/core';
import { DataSource1StoreService } from '../services/data-source1-store.service';

@Component({
  standalone: false,
  selector: 'app-store',
  templateUrl: './store.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent implements OnInit {
  private dataSource1StoreService = inject(DataSource1StoreService);

  public dataSource1StoreTable1: any = null;

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.dataSource1StoreService
      .getData('Table 1')
      .subscribe((data) => (this.dataSource1StoreTable1 = data));
  }
}
