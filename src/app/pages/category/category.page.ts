import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { CategoryWorkout } from 'src/app/core/model/categoryWorkout';
import { CategoryWorkoutSVCService } from 'src/app/core/services/category-workout-svc.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  public category:CategoryWorkout[] | undefined;
  constructor(
    private categorySVC : CategoryWorkoutSVCService,
    private modal:ModalController,
    private alert:AlertController,
  ) { }

  ngOnInit() {
  }

  getCategory(){
    return this.categorySVC.category$;
  }


}
