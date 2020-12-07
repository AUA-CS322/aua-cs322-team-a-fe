import {Component, Input, NgZone, OnChanges, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';
import {UsersService} from '../users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnChanges {

  @Input() username: string;
  @Input() userData: any;
  isReady: boolean;
  employeesChartId = 'employessChart-commpany';
  employeesChartClass = 'employess-chart';

  employeesData = {
    chart: {
      container: '#employessChart-commpany',

      connectors: {
        type: 'step'
      },
      node: {
        HTMLclass: 'employessNode'
      }
    },
    nodeStructure: {}
  };

  constructor(private usersService: UsersService, private router: Router,
              private zone: NgZone) {
  }

  ngOnChanges(): void {
    if (this.userData.hasOwnProperty('manager') && this.userData.manager) {
      const manager = this.dataIntoStructure(this.userData.manager);
      manager.children = [this.dataIntoStructure(this.userData)];
      this.employeesData.nodeStructure = manager;
    } else {
      this.employeesData.nodeStructure = this.dataIntoStructure(this.userData);
    }
    this.isReady = true;
  }

  dataIntoStructure(data): any {
    const name = `${data.firstName} ${data.lastName}`;

    const children = [];
    if (data.relations) {
      for (const child of data.relations) {
        children.push(this.dataIntoStructure(child));
      }
    }

    return {
      text: {
        name,
        title: data.position,
        username: data.username
      },
      image: data.photoUrl,
      children,
    };
  }

  click(event) {
    this.zone.run(() => {
      this.router.navigate(['/profile', event.node.text.username]);
    });
  }
}
