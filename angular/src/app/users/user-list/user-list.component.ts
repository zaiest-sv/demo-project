import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../users.service';
import { UserDto } from '../dtos/users.dto';
import { delay } from "rxjs";
import { Table } from "primeng/table";
import { ActivatedRoute, Router } from "@angular/router";
import { IFilter } from "../../shared/filter.interface";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {

  @ViewChild('dt') dt!: Table;

  users: UserDto[] = [];
  loading = true;
  filterId: IFilter[] = [];
  filterName: IFilter[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UsersService,
  ) {}

  ngOnInit(): void {
    this.userService.getUsers().pipe(delay(1000)).subscribe((data: UserDto[]) => {
      this.users = data;
      this.loading = false;
      this.filterId = this.users.map(user => ({ label: user.id?.toString(), value: user.id?.toString() }));
      this.users.map(user => {
        if (this.filterName.filter(x => x.label === user.name)) {
          this.filterName.push({ label: user.name, value: user.name });
        }
      });
    }, error => {
      this.loading = false;
      console.log('Error: ', error)
    });


  }

  searchInTable(event: any) {
    const currentValue = event?.target?.value;
    this.dt.filterGlobal(currentValue, 'contains')
  }

  openDetailsPage(userId: string) {
    this.router.navigate([`/user/details/${userId}`], { relativeTo: this.route });
  }
}
