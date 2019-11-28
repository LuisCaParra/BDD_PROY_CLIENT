import { Directive, OnInit, OnDestroy, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[roleCanAccess]'
})
export class CanAccessDirective implements OnInit, OnDestroy {

  @Input('roleCanAccess') roleCanAccess: string[];

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,

  ) {
  }

  ngOnInit(): void {
    console.log("[CanAccessDirective][ngOnInit]")

  }

  ngOnDestroy(): void {

  }

}
