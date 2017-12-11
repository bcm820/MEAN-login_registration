import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  user: any = {}
  
  constructor(
    private _us: UsersService,
    private _rt: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this._rt.paramMap.subscribe(param => {
      let id = param.get('id');
      this._us.show(id).subscribe(user => this.user = user);
    });
  }

  back(){
    this._router.navigate(['users','list']);
  }

}
