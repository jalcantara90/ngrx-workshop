import { Component, OnInit, OnDestroy } from '@angular/core';
import { NbMenuService } from '@nebular/theme';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ngrx-workshop';
  contextualItems = [{ title: 'Logout' }];
  subcription: Subscription;

  constructor(private menuService: NbMenuService) {}

  ngOnInit(): void {
    this.subcription = this.menuService.onItemClick().subscribe(() => console.log('logout'));
  }

  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }
}
