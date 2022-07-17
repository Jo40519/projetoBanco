import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { ngxLoadingAnimationTypes, NgxLoadingModule } from 'ngx-loading';
import { CustomAlertComponent } from './components/custom-alert/custom-alert.component';
import { LoadingCustomComponent } from './components/loading-custom/loading-custom.component';
import { PaginatorCustomComponent } from './components/paginator-custom/paginator-custom.component';
import { TableCustomComponent } from './components/table-custom/table-custom.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgxPaginationModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.circleSwish,
      backdropBorderRadius: '0px',
      fullScreenBackdrop: true,
      backdropBackgroundColour: 'rgba(0,0,0,0.3)',
      primaryColour: '#dc3545',
      secondaryColour: '#dc3545',
      tertiaryColour: '#dc3545'
    })
  ],
  declarations: [
    CustomAlertComponent,
    LoadingCustomComponent,
    PaginatorCustomComponent,
    TableCustomComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders <any> {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
 }
