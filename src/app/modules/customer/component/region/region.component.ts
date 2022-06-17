import { Component, OnInit } from '@angular/core';
import { Region } from '../../_model/region';
import { RegionService } from '../../_service/region.service';
import { FormBuilder, Validators} from '@angular/forms';

declare var $: any;

import Swal from 'sweetalert2';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  regions: Region[] = [];
  region: Region = new Region();
  formulario = this.formBuilder.group({
    id_region: [''],
    region: ['', Validators.required]
  });
  post_region = false;
  submitted = false;

  constructor(
    private region_service: RegionService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getRegions();
  }

  getRegions(){
    this.region_service.getRegions().subscribe(
      res => {
        this.regions = res;
        console.log(this.regions);
      },
      err => console.log(err)
    )
  }

  getRegion(id_region: number){
    this.region_service.getRegion(id_region).subscribe(
      res => {
        this.region = res;
        console.log(this.region);
      },
      err => console.log(err)
    )
  }

  onSubmit(){
    this.submitted = true;
    if(this.post_region){
      this.region_service.createRegion(this.formulario.value).subscribe(
        res => {
          console.log(this.region);
          this.getRegions();
          this.closeModal();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Registro exitoso!',
            showConfirmButton: false,
            timer: 1500
          })
        },
        err => {
          console.log(err);
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'La región no puede ser registrada',
          })
        }
      )
    }else{
      this.region_service.updateRegion(this.formulario.value).subscribe(
        res => {
          console.log(this.region);
          this.getRegions();
          this.closeModal();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Actualización exitosa!',
            showConfirmButton: false,
            timer: 1500
          })
        },
        err => {
          console.log(err);
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'La región no puede ser actualizada',
          })
        }
      )
    }
  }

  createRegion(){
    this.post_region = true;
    this.formulario.reset();
    $("#region_modal").modal("show");
  }

  updateRegion(region: Region){
    this.post_region = false;
    this.formulario.controls['id_region'].setValue(region.id_region);
    this.formulario.controls['region'].setValue(region.region);
    $("#region_modal").modal("show");
  }

  deleteRegion(id_region: number){
    Swal.fire({
      title: 'Deseas eliminar la Región?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.region_service.deleteRegion(id_region).subscribe(
          res => {
            console.log(this.region);
            this.getRegions();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Eliminación exitosa!',
              showConfirmButton: false,
              timer: 1500
            })
          },
          err => {
            console.log(err);
            Swal.fire({
              icon: 'error',
              title: 'Error!',
              text: 'La región no puede ser eliminada',
            })
          }
        )
      }
    })
    
  }

  get f() {
    return this.formulario.controls;
  }

  closeModal(){
    $("#region_modal").modal("hide");
    this.submitted = false;
  }
}