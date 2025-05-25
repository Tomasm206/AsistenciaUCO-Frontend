import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { AuthService } from '@auth0/auth0-angular';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';


@Component({
  selector: 'app-navbar',
  imports: [MatButtonModule, MatIconModule, MatToolbarModule, RouterModule, MatMenuModule, CommonModule, MatSidenavModule, MatIconModule, MatListModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  public authService = inject(AuthService);
  @ViewChild('drawer') drawer!: MatSidenav;
  ngOnInit() : void{
    console.log(this.authService); // vemos todo lo que trae el servicio
    this.authService.idTokenClaims$.subscribe(claims => {
      console.log('Token Claims:', claims); // vemos los claims del token
    });

    this.authService.user$.subscribe(user => {
      console.log(user); // vemos los datos del usuario
    });
  }

  logout() {
    this.authService.logout();
  }
}
