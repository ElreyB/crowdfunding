import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-funding',
  templateUrl: './funding.component.html',
  styleUrls: ['./funding.component.css'],
  providers: [ProjectService]
})
export class FundingComponent implements OnInit {
  projectId: string;
  @Input() fundProject: Project;
  amount: number;
  buttonStatus = true;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private projectService: ProjectService
  ) { }

  ngOnInit() {
  }

  beginFundProject(amountToFund) {
    this.amount = this.fundProject.funds += parseInt(amountToFund);
    if(confirm(`Are you sure you want to fund $${amountToFund} to this project?`)){
      this.projectService.fundProject(this.fundProject, this.amount);
    }
  }

}
