import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { CategoryFormComponent } from 'src/app/core/components/category-form/category-form.component';
import { CategoryWorkout } from 'src/app/core/model/categoryWorkout';
import { CategoryWorkoutSVCService } from 'src/app/core/services/category-workout-svc.service';
import { WorkoutSVCService } from 'src/app/core/services/workout-svc.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  public category:CategoryWorkout[] | undefined;
  constructor(
    private categorySVC : CategoryWorkoutSVCService,
    private workoutSVC : WorkoutSVCService,
    private modal:ModalController,
    private alert:AlertController,
  ) { }

  ngOnInit() {
  }

  getCategory(){
    return this.categorySVC.category$;
  }
  async categoryForm (category:CategoryWorkout|null|undefined){
    const modal = await this.modal.create({
        component:CategoryFormComponent,
        componentProps:{
          category:category
        },
        cssClass:"modal-full-right-side"
    });
    modal.present();
    modal.onDidDismiss().then(result=>{
      if(result && result.data){
        switch(result.data.mode){
          case 'New':
            this.categorySVC.addCategory(result.data.category);
            break;
          case 'Edit':
            this.categorySVC.updateCategory(result.data.category);
            break;
          default:
        }
      }
    });
}

onAddCategory(){
  this.categoryForm(null);
}
onUpdateCategory(category:CategoryWorkout){
  this.categoryForm(category);
} 

async onDeleteAlert(category:any){
  const alert = await this.alert.create({
    header: '¿Está seguro de que desear borrar la Categoria?',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log("Operacion cancelada");
        },
      },
      {
        text: 'Borrar',
        role: 'confirm',
        handler: () => {
            this.categorySVC.deleteCategorytById(category.id);
          
        },
      },
    ],
  });

  await alert.present();

  const { role } = await alert.onDidDismiss();
}

async onCategoryExistsAlert(category:any){
  const alert = await this.alert.create({
    header: 'Error',
    message: 'No es posible borrar la categoria porque está asignada a un ejercicio',
    buttons: [
      {
        text: 'Cerrar',
        role: 'close',
        handler: () => {
        },
      },
    ],
  });

  await alert.present();

  const { role } = await alert.onDidDismiss();
}

onDeleteCategory(category:any){
  if(!this.workoutSVC.getWorkoutByCategory(category.id)){
    this.onDeleteAlert(category);
  }else{
    this.onCategoryExistsAlert(category);
  }
}

}
