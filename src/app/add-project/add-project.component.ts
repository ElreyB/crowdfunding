import { Component } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css'],
  providers: [ProjectService]
})

export class AddProjectComponent {

  constructor(private projectService: ProjectService,  private router: Router) { }

  ngOnInit() {
  }

  submitForm(
    name: string,
    projectManagers: string,
    description: string,
    goal: number,
    intention: string
  ) {
    let newProject: Project = new Project(name, projectManagers.split(","), description, goal, intention);
    this.projectService.addProject(newProject);
    this.router.navigate(['projects']);
  }
}
