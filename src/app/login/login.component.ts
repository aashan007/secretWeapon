import { Component, HostListener, NgZone, ViewChild, OnInit} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
declare var Wallet: any;
declare var window: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('keyFile') keyFile: any;
  @ViewChild('passwd') passwd: any;

  private fileContent: any;

  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  fileChange(event: any) {
    this.readThis(event.target);
  }

  readThis(inputValue: any): void {
    const file: File = inputValue.files[0];
    const myReader: FileReader = new FileReader();
    myReader.onloadend = (e) => {
      this.fileContent = myReader.result;
    }
    myReader.readAsText(file);
  }

  login() {
    const password = this.passwd.nativeElement.value;
    var result = this.auth.checkCredential(name,password);
    // const response = this.auth.checkCredential().then(function(result)  {
      // console.log("Paul thall-1")
      if (result == 'dist') { this.router.navigate(['/distributor']); };
      if (result == 'mfg') { this.router.navigate(['/manufacturer']); };
      if (result == 'retail') { 
        // console.log("Paul thall-2");
        this.router.navigate(['/retailer']); };
      if (result == 'supplier') { this.router.navigate(['/supplier']); };
    // });

  }

}
