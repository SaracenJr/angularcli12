import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {Component1ShellComponent} from "./containers/component1Shell/component1Shell.component";
import {Component2ShellComponent} from "./containers/component2Shell/component2Shell.component";

const routes: Routes = [
    { path: 'component1Shell', component: Component1ShellComponent },
    { path: 'component2Shell', component: Component2ShellComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
