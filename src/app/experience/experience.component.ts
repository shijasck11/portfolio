import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  years: number;
  months: number;
  monthName: string;
  monthNames: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  constructor() {
    const currentDate = new Date();
    const targetDate = new Date(2023, 4); // May is month 4 (0-based index)

    // Calculate the difference in years and months
    this.years = currentDate.getFullYear() - targetDate.getFullYear();
    this.months = currentDate.getMonth() - targetDate.getMonth();

    // Adjust for negative months (e.g., if the current date is before May 2023)
    if (this.months < 0) {
      this.years--;
      this.months += 12;
   }
   this.monthName = this.getMonthName(this.months + 5);
  }
  ngOnInit(): void {
    
  }

  getMonthName(monthNumber: number): string {
    if (monthNumber >= 1 && monthNumber <= 12) {
      return this.monthNames[monthNumber - 1];
    } else {
      return 'Invalid Month Number';
    }
  }

}
