import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

import { NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { PagesModule } from '../pages/pages.module';
import { ShareModule } from '../share/share.module';
import { ServicesModule } from '../services/services.module';
registerLocaleData(zh);
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PagesModule,
    ShareModule,
    ServicesModule,
    AppRoutingModule,
  ],
  exports: [
    AppRoutingModule,
    ShareModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
})
export class CoreModule {
  constructor(@SkipSelf() @Optional() parentModule: CoreModule) {
     if (parentModule) {
       throw new Error('CoreModule 只能被appModule引用');
     }
  }
 }
