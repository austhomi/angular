import { Injectable } from "@angular/core";
import { ChangeLogService } from "./changelog.service";

@Injectable()
export class UserService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private changelogService: ChangeLogService) {}
  
  onSetToInactive(id: number) {
    const name = this.activeUsers[id];
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.changelogService.updateRecord(name,'inactive')
    this.changelogService.getRecord(name)
  }

  onSetToActive(id: number) {
    const name = this.inactiveUsers[id];
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.changelogService.updateRecord(name,'active')
    this.changelogService.getRecord(name)
  }
}