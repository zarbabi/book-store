import {Component} from '@angular/core';
import {BasketService} from "../../services/basket.service";

@Component({
  selector: 'app-store-layout',
  templateUrl: './store-layout.component.html',
  styleUrls: ['./store-layout.component.scss']
})
export class StoreLayoutComponent {
  constructor(private basketService: BasketService) {

  }

  countBasket(): number {
    return this.basketService.count();
  }
}
