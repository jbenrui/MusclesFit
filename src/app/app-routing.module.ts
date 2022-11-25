import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'exercises',
    loadChildren: () => import('./pages/workouts/workout.module').then( m => m.WorkoutPageModule)
  },
  {
    path: 'dailyworkout',
    loadChildren: () => import('./pages/dailyworkout/dailyworkout.module').then( m => m.DailyworkoutPageModule)
  },
  {
    path: 'equipment',
    loadChildren: () => import('./pages/equipment/equipment.module').then( m => m.EquipmentPageModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./pages/category/category.module').then( m => m.CategoryPageModule)
  },
  {
    path: 'abaout',
    loadChildren: () => import('./pages/abaout/abaout.module').then( m => m.AbaoutPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
