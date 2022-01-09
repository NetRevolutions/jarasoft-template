import { NgModule, Optional, SkipSelf } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [

  ]
})
export class CoreModule {

  constructor(
    @Optional() @SkipSelf() parentModule?: CoreModule
  )
  {
    // Do not allow multiple injections
    if (parentModule)
    {
      throw new Error('CoreModule has already been loaded. Import this module in the AppModule only.');
    }
  }
}
