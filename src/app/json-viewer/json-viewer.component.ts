import { Component, OnInit, Renderer2, ElementRef, Input } from '@angular/core';
import JSONFormatter from 'json-formatter-js';

@Component({
  selector: 'json-viewer',
  template: ``
})
export class JsonViewerComponent {

    private _source: object | any[];
    get source() {
        return this._source;
    }
    @Input()
    set source(value) {
        this._source = value;
        this.refresh();
    }

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  refresh() {
    while (this.el.nativeElement.children.length > 0)
        this.renderer.removeChild(this.el.nativeElement, this.el.nativeElement.children[0]);
    if (this.source) {
        const formatter = new JSONFormatter(this.source);
        this.renderer.appendChild(this.el.nativeElement, formatter.render());
    }
  }
}
