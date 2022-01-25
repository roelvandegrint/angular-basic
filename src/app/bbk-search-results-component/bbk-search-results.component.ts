import { Component, OnInit } from '@angular/core';
import { categories } from '../data.categories';
import {
  GridDataResult,
  PageChangeEvent,
  SelectionEvent,
} from '@progress/kendo-angular-grid';
import { SortDescriptor } from '@progress/kendo-data-query';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './bbk-search-results.component.html',
  styleUrls: ['./bbk-search-results.component.sass'],
  providers: [ProductService],
})
export class BbkSearchResultsComponent implements OnInit {
  public title = 'kendo-angular-app';
  public dropDownItems = categories;
  public defaultItem = { text: 'Filter by Category', value: null };

  public gridItems!: Observable<GridDataResult>;
  public pageSize: number = 10;
  public skip: number = 0;
  public sortDescriptor: SortDescriptor[] = [];
  public filterTerm?: number;

  public loadingUri = false;

  constructor(private service: ProductService, private router: Router, private route: ActivatedRoute) {
    this.loadGridItems();
  }

  public ngOnInit(): void {}

  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.loadGridItems();
  }

  private loadGridItems(): void {
    this.gridItems = this.service.getProducts(
      this.skip,
      this.pageSize,
      this.sortDescriptor,
      this.filterTerm
    );
  }

  public handleSortChange(descriptor: SortDescriptor[]): void {
    this.sortDescriptor = descriptor;
    this.loadGridItems();
  }

  public handleFilterChange(item: {
    text: string;
    value: number | null;
  }): void {
    this.filterTerm = item.value === null ? undefined : item.value;
    this.skip = 0;
    this.loadGridItems();
  }

  public selectionChange(event: SelectionEvent): void {
    this.router.navigate(['1'], { relativeTo: this.route });
  }
}
