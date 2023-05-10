import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../../shared/users.service';
import { UserDTO } from '../../shared/usersDTO';
import { delay } from "rxjs";
import { Table } from "primeng/table";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {

  @ViewChild('dt') dt!: Table;

  users: UserDTO[] = [];
  loading = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UsersService,
  ) {}

  ngOnInit(): void {
    this.userService.getUsers().pipe(delay(1000)).subscribe((data: UserDTO[]) => {
      console.log('data ', data)
      this.users = data;
      this.loading = false;
   });
  }

  searchInTable(event: any) {
    const currentValue = event?.target?.value;
    this.dt.filterGlobal(currentValue, 'contains')
  }

  openDetailsPage(userId: string) {
    console.log('userId ', userId)
    this.router.navigate([`/user/details/${userId}`], { relativeTo: this.route });
  }
}
