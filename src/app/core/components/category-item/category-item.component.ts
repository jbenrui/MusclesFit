import { Component, Input, OnInit } from '@angular/core';
import { CategoryWorkout } from '../../model/categoryWorkout';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss'],
})
export class CategoryItemComponent implements OnInit {

  @Input() category:CategoryWorkout | undefined;
  constructor() { }

  ngOnInit() {}

}
