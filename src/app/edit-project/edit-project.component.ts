import { Component, Input, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css'],
  providers: [ProjectService]
})
export class EditProjectComponent implements OnInit {
  @Input() selectedProject;
  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit() {
  }

  beginUpdatingProject(projectToUpdate) {
    this.projectService.updateProject(projectToUpdate);
    this.router.navigate(['projects']);
  }

}
