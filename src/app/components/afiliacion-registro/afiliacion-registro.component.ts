import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service/auth-service.service';
import { GeneralService } from 'src/app/services/general/general.service';
import { SalasService } from 'src/app/services/salas/salas.service';
declare var $: any;
@Component({
  selector: 'app-afiliacion-registro',
  templateUrl: './afiliacion-registro.component.html',
  styleUrls: ['./afiliacion-registro.component.css']
})
export class AfiliacionRegistroComponent implements OnInit {
  nombreComercio: String;
  tipoServicio: String;
  giroNegocio: String;
  correoComercio: String;
  descripcion: String;



  constructor(public salasService: SalasService, public authService: AuthServiceService, public generalService: GeneralService) { }

  ngOnInit(): void {
    this.getSolicitudesUsuario();


    $("#selector1").change(() => {
      this.giroNegocio = $('#selector1').val();

    });
  }



  createSolicitud() {
    const solicitud = {
      username: this.authService.loadUser().username,
      comercio: {
        nombre: this.nombreComercio,
        tipo_servicio: this.tipoServicio,
        giro_negocio: this.giroNegocio,
        correo_electronico: this.correoComercio

      },
      desc: this.descripcion
    }
    console.log(solicitud);
    this.salasService.postSolicitudes(solicitud).subscribe(res => {
      const resp = JSON.parse(JSON.stringify(res));
      if (resp.success) {

        this.generalService.Swal("correcto", resp.msg, "success")
      } else {

        this.generalService.Swal("error", resp.msg, "error")
      }

    })
  }


  giroNegocios() {
    this.giroNegocio = $('#selector1').val();


  }
  getSolicitudesUsuario() {

    this.salasService.getSolicitudUsuario(this.authService.loadUser().username).subscribe((res) => {

      const resp = JSON.parse(JSON.stringify(res));
      this.salasService.solicitudes = resp.solicitudes;


    })
  }

  mostrarEstadoSolicitud(id) {
    this.salasService.mostrarEstado(id).subscribe((res) => {

      const resp = JSON.parse(JSON.stringify(res));
      this.generalService.Swal("Estado Solicitud", resp.msg, "info")
    });





  }

}
