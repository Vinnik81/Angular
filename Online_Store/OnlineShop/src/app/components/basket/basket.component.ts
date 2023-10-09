import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProducts } from 'src/app/models/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  basket: IProducts[];
  basketSubscription: Subscription;
  
  constructor(private ProductsService: ProductsService) { }
  
  ngOnInit(): void {
    this.basketSubscription = this.ProductsService.getProductsFromBasket().subscribe((data) => {
      this.basket = data;
    });
  }

  ngOnDestroy() {
    if (this.basketSubscription) {
      this.basketSubscription.unsubscribe();
    }
  }

  minusItemFromBasket(item: IProducts) {
    if (item.quantity === 1) {
      this.ProductsService.deleteProductFromBasket(item.id).subscribe(() => {
        let idx = this.basket.findIndex((data) => data.id === item.id);
        this.basket.splice(idx, 1);
      });
    }
    else {
      item.quantity--;
      this.ProductsService.updateProductToBasket(item).subscribe((data) => {
      });
    }
  }

  plusItemFromBasket(item: IProducts) {
    item.quantity++;
    this.ProductsService.updateProductToBasket(item).subscribe((data) => {
    });
  }
}
