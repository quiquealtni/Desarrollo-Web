import { Component, OnInit } from '@angular/core';
import { CartService } from '../../_service/cart.service';
import { ApisURI } from 'src/app/shared/apis-uri';
import { Cart } from '../../_model/Cart';

declare var $: any;

import Swal from 'sweetalert2';
import { InvoiceService } from '../../_service/invoice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  carrito: any;
  subtotal: number;
  total: number;

  constructor(
    private cart_service: CartService,
    private invoice_service: InvoiceService
  ) {
    this.subtotal = 0;
    this.total = 0;
   }

  ngOnInit(): void {
    this.getCart()
  }

  getCart(){
    this.cart_service.getCart(ApisURI.rfc).subscribe(
      res => {
        this.carrito = <Cart[]>res;
        this.calculaPrecio();
      },
      err => console.log(err)
    )
  }

  calculaPrecio(){
    this.subtotal = 0;
    for (let cart of this.carrito) {
      this.subtotal += cart.quantity * cart.product.price;
    }
    this.total = this.subtotal;
  }

  muestraPago(){
    $("#campoCardNumber").css("color","black");
    $("#campoCVV").css("color","black");
    $("#campoExpDate").css("color","black");
    $("#campoTitular").css("color","black");
    $("#staticBackdrop").modal("show");
  }

  closeModal(){
    $("#staticBackdrop").modal("hide");
  }

  pagar(){
    var registra = true
    if($("#cvv").val().length<3){
      $("#campoCVV").css("color","red");
      registra = false
    }else{
      $("#campoCVV").css("color","black");
    }
    if($("#txt_cardNumber").val().length<16){
      $("#campoCardNumber").css("color","red");
      registra = false
    }else{
      $("#campoCardNumber").css("color","black");
    }
    if($("#expDate").val().length<4){
      $("#campoExpDate").css("color","red");
      registra = false
    }else{
      $("#campoExpDate").css("color","black");
    }
    if($("#titular").val().length<1){
      $("#campoTitular").css("color","red");
      registra = false
    }else{
      $("#campoTitular").css("color","black");
    }

    if(registra){
      this.invoice_service.purchase().subscribe(
        res => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Compra exitosa!',
            showConfirmButton: false,
            timer: 1500
          })
          this.closeModal()
          this.getCart()
        },
        err => console.log(err)
      )
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Hay información inválida en uno o más campos!',
      })
    }
  }
  deleteProductFromCart(id_cart: number){
    Swal.fire({
      title: 'Deseas eliminar el producto?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.cart_service.deleteProductFromCart(id_cart).subscribe(
          res => {
            this.getCart();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Eliminación exitosa!',
              showConfirmButton: false,
              timer: 1500
            })
            this.calculaPrecio();
          },
          err => {
            console.log(err);
            Swal.fire({
              icon: 'error',
              title: 'Error!',
              text: 'El producto no puede ser eliminado',
            })
          }
        )
      }
    })
  }

}
