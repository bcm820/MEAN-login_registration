
import { Component } from '@angular/core';
import { SearchService } from '../_services/search.service';
import { Subject } from 'Rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  users;
  name$ = new Subject();
  
  constructor(private _ss: SearchService) {
    this._ss.searchTerm(this.name$, 'names')
      .subscribe(list => this.users = list);
  }

}
