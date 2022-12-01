import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { EquipmentFormComponent } from 'src/app/core/equipment-form/equipment-form.component';
import { Equipment } from 'src/app/core/model/equipment';
import { EquipamentSVCService } from 'src/app/core/services/equipament-svc.service';
import { WorkoutSVCService } from 'src/app/core/services/workout-svc.service';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.page.html',
  styleUrls: ['./equipment.page.scss'],
})
export class EquipmentPage implements OnInit {
  public equipment:Equipment[] | undefined;
  constructor(
    private equipmentSVC : EquipamentSVCService,
    private workoutSVC : WorkoutSVCService,
    private modal:ModalController,
    private alert:AlertController,
  ) { }

  ngOnInit() {
  }

  getEquipment(){
    return this.equipmentSVC.equipment$
  }

  async equipmentForm (equipament:Equipment|null|undefined){
      const modal = await this.modal.create({
          component:EquipmentFormComponent,
          componentProps:{
            equipament:equipament
          },
          cssClass:"modal-full-right-side"
      });
      modal.present();
      modal.onDidDismiss().then(result=>{
        if(result && result.data){
          switch(result.data.mode){
            case 'New':
              this.equipmentSVC.addEquipment(result.data.equipament);
              break;
            case 'Edit':
              this.equipmentSVC.updateEquipment(result.data.equipament);
              break;
            default:
          }
        }
      });
  }
  
  onNewEquipment(){
    this.equipmentForm(null);
  }
  onEditEquipment(equipment:Equipment){
    this.equipmentForm(equipment);
  } 
  
  async onDeleteAlert(equipment:any){
    const alert = await this.alert.create({
      header: '¿Está seguro de que desear borrar el equipamiento?',
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
              this.equipmentSVC.deleteEquipmentById(equipment.id);
            
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  async onEquipmentExistsAlert(equipment:any){
    const alert = await this.alert.create({
      header: 'Error',
      message: 'No es posible borrar el equipamiento porque está asignada a un ejercicio',
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

  onDeletePerson(equipament:any){
    if(!this.workoutSVC.getWorkoutByEquipment(equipament.id)){
      
      this.onDeleteAlert(equipament);
      console.log(equipament);
    }else{
      console.log(this.workoutSVC.getWorkoutByEquipment(equipament.id));
      this.onEquipmentExistsAlert(equipament);
    }
      
    
  }
}

