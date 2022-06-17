import { Component, OnInit } from '@angular/core';
import { Category } from '../../_model/category';
import { CategoryService } from '../../_service/category.service';
import { FormBuilder, Validators} from '@angular/forms';

declare var $: any;

import Swal from 'sweetalert2';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[] = [];
  category: Category = new Category();
  formulario = this.formBuilder.group({
    id_category: [''],
    category: ['', Validators.required]
  });
  post_category = false;
  submitted = false;

  constructor(
    private category_service: CategoryService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.category_service.getCategories().subscribe(
      res => {
        this.categories = res;
      },
      err => console.log(err)
    )
  }

  getCategory(id_category: number){
    this.category_service.getCategory(id_category).subscribe(
      res => {
        this.category = res;
      },
      err => console.log(err)
    )
  }

  onSubmit(){
    this.submitted = true;
    if(this.post_category){
      this.category_service.createCategory(this.formulario.value).subscribe(
        res => {
          this.getCategories();
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
            text: 'La categoría no puede ser registrada',
          })
        }
      )
    }else{
      this.category_service.updateCategory(this.formulario.value).subscribe(
        res => {
          this.getCategories();
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
            text: 'La categoría no puede ser actualizada',
          })
        }
      )
    }
  }

  createCategory(){
    this.post_category = true;
    this.formulario.reset();
    $("#category_modal").modal("show");
  }

  updateCategory(category: Category){
    this.post_category = false;
    this.formulario.controls['id_category'].setValue(category.id_category);
    this.formulario.controls['category'].setValue(category.category);
    $("#category_modal").modal("show");
  }

  deleteCategory(id_category: number){
    Swal.fire({
      title: 'Deseas eliminar la Región?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.category_service.deleteCategory(id_category).subscribe(
          res => {
            this.getCategories();
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
    $("#category_modal").modal("hide");
    this.submitted = false;
  }

}
