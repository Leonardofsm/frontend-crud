
import { Component, OnInit } from '@angular/core';
import { RunnerService } from '../services/runner.service';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-runner-dashboard',
  templateUrl: './runner-dashboard.component.html',
  styleUrls: ['./runner-dashboard.component.scss']
})
export class RunnerDashboardComponent implements OnInit {

  constructor(private runnerService: RunnerService) { }


  ngOnInit(): void {
    // Call the methods that use the runnerService here
    this.getRunners();
    this.addRunner();
    this.updateRunner();
    this.deleteRunner();
  }

  getRunners(): void {
    // Implement the logic to get runners using the runnerService
    this.runnerService.listarRunners().subscribe(runners => {
      // Handle the response here
    }, error => {
      // Handle the error here
    });
  }

  addRunner(): void {
    // Implement the logic to add a runner using the runnerService
    const newRunner = {  };
    this.runnerService.cadastrarRunner(newRunner).subscribe(response => {
      // Handle the response here
    }, error => {
      // Handle the error here
    });
  }

  updateRunner(): void {
    // Implement the logic to update a runner using the runnerService
    const updatedRunner = { id: 1, name: 'Updated Runner', age: 30 };
    this.runnerService.updateRunner(updatedRunner).subscribe(response => {
      // Handle the response here
    }, error => {
      // Handle the error here
    });
  }

  deleteRunner(): void {
    // Implement the logic to delete a runner using the runnerService
    const runnerId = 1;
    this.runnerService.deleteRunner(runnerId).subscribe(response => {
      // Handle the response here
    }, error => {
      // Handle the error here
    });
  }
}
