import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { ngxLoadingAnimationTypes, NgxLoadingModule } from 'ngx-loading';

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
  declarations: [SharedComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders <any> {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
 }
