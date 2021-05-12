import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'twds-hexagram',
  styleUrl: 'twds-hexagram.css',
  shadow: false,
})
export class TwdsHexagram {

  @Prop() lines: string;

  _lines: boolean[] = [];

  componentWillLoad() {
    if (this.lines) {
     this._lines = this.lines.split('').map( line => line === '1' ? true : false)
    }
  }

  render() {
    return (
      <Host>
        <div class="mb-10 w-20">
          { this._lines.map((line) =>
            line ? 
              <div class="h-3 mb-2 bg-gray-600 w-full"></div>
             : 
             <div class="flex mb-2">
              <div class="h-3 bg-gray-600 flex-1"></div>
              <div class="h-3 bg-white w-2"></div>
              <div class="h-3 bg-gray-600 flex-1"></div>
             </div>
          )}
        </div>
        <slot></slot>
      </Host>
    );
  }

}
