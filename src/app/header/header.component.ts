import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showMenu: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  contactLink = {
    description: "Contact Us",
    linkUrl: "https://api.whatsapp.com/send?phone=2348148284576"
  }

  displayMenu = () => {
    this.showMenu = !this.showMenu;
  }



  profileLoginToggle() {
    if(this.authService.isLoggedIn()) {
      this.router.navigate(['/profile'])
    } else {
      this.authService.logout();
    }
  }

  openNav = () => {
    console.log("got here")
    document.getElementById("mySidepanel").style.width = "250px";
  }

  /* Set the width of the sidebar to 0 (hide it) */
  closeNav = () => {
    document.getElementById("mySidepanel").style.width = "0";
  }

  ngOnInit() {
  }

}
