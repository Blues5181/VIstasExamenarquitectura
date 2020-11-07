import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service/auth-service.service';
import { GeneralService } from 'src/app/services/general/general.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  nombre: String;
  apellido: String;
  telefono: String;
  correo: String;
  fechaNacimiento: Date;
  username: String;
  password: String;


  constructor(
    public authService: AuthServiceService,
    public generalService: GeneralService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  onSignupUser() {
   
    const user = { nombre: this.nombre,fechaNacimiento: this.fechaNacimiento,correo:this.correo,telefono:this.telefono, apellido:this.apellido, username: this.username, password: this.password, type: 'NU' };
   console.log(user);
    this.authService.authUserCredentials(user, 'r').subscribe(res => {
      const resp = JSON.parse(JSON.stringify(res));
      if (resp.success) {
        this.generalService.toast(resp.msg, undefined, 'success');
        this.router.navigate(['/login']);
      } else {
        this.generalService.Swal('Error', resp.msg, 'error');
      }
    })
  }
}
