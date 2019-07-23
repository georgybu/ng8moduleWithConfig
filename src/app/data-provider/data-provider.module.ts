import {ModuleWithProviders, NgModule} from '@angular/core';
import {DataProviderService} from './data-provider.service';
import {DataProviderConfig} from './data-provider.token';
import {HttpClientModule} from '@angular/common/http';

@NgModule()
export class DataProviderModule {
  static forFeature(config: any): ModuleWithProviders {
    return {
      ngModule: DataProviderModule,
      providers: [
        DataProviderService,
        {
          provide: DataProviderConfig,
          useValue: config,
        },
      ]
    };
  }
}