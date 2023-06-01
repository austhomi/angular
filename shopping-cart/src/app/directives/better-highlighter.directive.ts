import { Directive, ElementRef, Renderer2, OnInit, HostListener} from '@angular/core';

@Directive({
  selector: '[appBetterHighlighter]'
})
export class BetterHighlighterDirective implements OnInit{

  constructor(private elRef:ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white')
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent')
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black')
  }

}