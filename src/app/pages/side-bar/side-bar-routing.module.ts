import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SideBarPage } from './side-bar.page';

const routes: Routes = [
  {
    path: '',
    component: SideBarPage,
    children: [
      {
        path: '',
        redirectTo: 'folder/Inbox',
        pathMatch: 'full'
      },
      {
        path: 'folder/:id',
        loadChildren: () => import('../folder/folder.module').then(m => m.FolderPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SideBarPageRoutingModule { }
