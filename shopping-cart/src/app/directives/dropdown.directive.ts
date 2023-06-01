import { Directive, ElementRef, Host, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') openDropdown: boolean = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('document:click',['$event']) toggleOpen(event: Event) {
    this.openDropdown = this.elRef.nativeElement.contains(event.target) ? !this.openDropdown : false;
/*     if (this.openDropdown) {
      this.renderer.addClass(this.elRef.nativeElement, 'open');
    } else {
      this.renderer.removeClass(this.elRef.nativeElement, 'open');
    } */
  }
}
