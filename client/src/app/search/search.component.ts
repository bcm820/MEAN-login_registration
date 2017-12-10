
import { Component } from '@angular/core';
import { SearchService } from '../_services/search.service';
import { Subject } from 'Rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  users = [];
  status = false;
  searched = false;
  search = {field:'', term:''}
  params$ = new Subject();
  
  constructor(private _ss: SearchService) {
    this._ss.timeSearch(this.params$)
    .subscribe(list => this.users = list);
  }

  updateParams(){
    this.status = true;
    this.searched = false;
    this.params$.next(this.search);
    setTimeout(() => {
      this.status = false;
      this.searched = true;
    }, 1300)
  }

}
