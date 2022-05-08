import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Bid } from '../models/bid.model';
import { ProductDetails } from '../models/product-details.model';
import { Product } from '../models/product.model';
import { HttpService } from '../service/http-service.service';

@Component({
  selector: 'app-auction-product-details',
  templateUrl: './auction-product-details-component.component.html',
  styleUrls: ['./auction-product-details-component.component.css']
})
export class AuctionProductDetailsComponentComponent implements OnInit {

  private apiUrl = environment.apiUrl;

  products: Product[] = [];
  productDetails: ProductDetails = new ProductDetails();
  selectedProdId: number;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.get<Product[]>(this.apiUrl + 'seller/all-products').subscribe(result => {
      this.products = result;
    });
  }

  onProductChange(prodId: number) {
    this.selectedProdId = prodId;
  }

  fetchProdDetails() {
    if (!this.selectedProdId) {
      return;
    }
    this.httpService.get<ProductDetails>(this.apiUrl + 'seller/show-bids/' + this.selectedProdId).subscribe(result => {
      this.productDetails = result;
    });
  }

}
