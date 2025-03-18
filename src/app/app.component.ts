import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatButtonToggleModule, MatIconModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'advanced-expense-manager';

  private isDark = false;
  ngOnInit() {
    this.applySavedTheme();
  }
  toggleTheme() {
    this.isDark = !this.isDark;
    document.documentElement.setAttribute('data-theme', this.isDark ? 'dark' : 'light');
    localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
  }

  applySavedTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }
}
