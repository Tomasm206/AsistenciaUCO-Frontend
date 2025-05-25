import { Component, inject, OnDestroy, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component'
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, NavbarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  private authservice = inject(AuthService);
  private destroy$ = new Subject<void>();
  isAuthenticated: boolean = false;

  ngOnInit(): void {
    this.authservice.isAuthenticated$.pipe(takeUntil(this.destroy$)).subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
