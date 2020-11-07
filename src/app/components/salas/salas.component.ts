import { Component, OnInit } from '@angular/core';
import { SalasService } from 'src/app/services/salas/salas.service';
import { GeneralService } from 'src/app/services/general/general.service';
@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.css']
})
export class SalasComponent implements OnInit {

  constructor(public salasService: SalasService, public generalService: GeneralService) { }

  ngOnInit(): void {
    this.getSolicitudes();
    
  }

  getSolicitudes() {

    this.salasService.getSolicitudes().subscribe(res => {
       const resp = JSON.parse(JSON.stringify(res));
       this.salasService.solicitudes=resp.solicitudes;
       
    });

  }
  procesarSolicitud(id,estado){

  this.salasService.procesarSolicitudes({id,estado}).subscribe((res)=>{


    const resp = JSON.parse(JSON.stringify(res));
   
    if (resp.success) {

      this.generalService.Swal("correcto", resp.msg, "success")
    } else {

      this.generalService.Swal("error", resp.msg, "error")
    }
this.getSolicitudes();
  })
}


}
