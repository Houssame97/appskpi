import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/authentication/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  role: string ;
  user = new Array<string>(4);
  constructor(private loginService: LoginService,  private router: Router) {
   }
  ngOnInit(): void {
    this.role = this.loginService.getRole();
    this.user = this.loginService.getUser();
  }

  onLogout(){
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
