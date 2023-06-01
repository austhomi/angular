import { Directive, ElementRef, Host, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  openDropdown: boolean = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') toggleOpen() {
    this.openDropdown = !this.openDropdown;
    if (this.openDropdown) {
      this.renderer.addClass(this.elRef.nativeElement, 'open');
    } else {
      this.renderer.removeClass(this.elRef.nativeElement, 'open');
    }
  }

}
