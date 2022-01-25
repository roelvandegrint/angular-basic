import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  templateUrl: './bbk-details.component.html',
  styleUrls: ['./bbk-details.component.sass'],
  providers: [ProductService],
})
export class BbkDetailsComponent {}
