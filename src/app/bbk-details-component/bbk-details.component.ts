import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  templateUrl: './bbk-details.component.html',
  styleUrls: ['./bbk-details.component.sass'],
  providers: [ProductService],
})
export class BbkDetailsComponent implements OnInit {

  constructor(private service: ProductService) {}

  public ngOnInit(): void {}
}
