import { Component, OnInit } from '@angular/core';
import { Experience } from '../models/experience';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  experienceList: Experience[] = [
    {
      companyName: "ABC Corp",
      jobTitle: "Retail Jedi",
      description: "Worked as a shopping assistant"
  },
  {
      companyName: "Flash Inc",
      jobTitle: "Light Bender",
      description: "Responsible for the high tech, precision job of making neon lights"
  },
  {
      companyName: "BNC Bank",
      jobTitle: "Legal Bank Robber",
      description: "Checking security vulnerabilities"
  }
  ]
  showExperience: boolean = true;

  showHideExperience() {
    this.showExperience = !this.showExperience;
  }
}
