import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from '../form/form.component';
import { GridComponent } from '../grid/grid.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';

const routes: Routes = [
    { path: '', component: GridComponent },
    // { path: 'CustomerGrid', component: GridComponent },
    { path: 'addCustomer', component: FormComponent },
    { path: 'customer/:id/details', component: FormComponent },
    { path: 'customer/:id/edit', component: FormComponent },
    { path: 'adduser', component: FormComponent }
];

@NgModule({
    imports: [
      RouterModule.forChild(routes),
      ReactiveFormsModule,
      CommonModule,
      MaterialModule
    ],
    declarations: [
        FormComponent,
        GridComponent
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})



export class GridModule {}