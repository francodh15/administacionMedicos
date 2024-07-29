import { Component, OnInit } from '@angular/core';
import { clients } from 'src/app/interface/clients';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  constructor(public  UserService : UserService) { }
  listOfData: clients[] = [ ];
  filterNombre=''
  
 
  ngOnInit(): void {
    this.UserService.getClients().subscribe((data:any[]) => {
      this.listOfData=data;
    });
  }

  
  delete(id:any){
    this.UserService.deleteClients(id).subscribe((resp) => {
      this.UserService.getClients().subscribe((data:any[]) => {
        this.listOfData=data;
        })
    })
  }
}
