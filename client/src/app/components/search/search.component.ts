
import { Component } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Subject } from 'Rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  users = [];
  searching = false;
  search = {field:'', term:''}
  params$ = new Subject();
  
  constructor(private _ss: SearchService) {
    this._ss.timeSearch(this.params$)
    .subscribe(list => this.users = list);
  }

  updateParams(){
    this.searching = true;
    this.params$.next(this.search);
    setTimeout(() => { this.searching = false; }, 1200);
  }

}
