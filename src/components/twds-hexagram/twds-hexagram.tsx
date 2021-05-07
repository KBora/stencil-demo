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
        <div>
          { this._lines.map((line) =>
            <div >{line? '1' : '0'}</div>
          )}
        </div>
      </Host>
    );
  }

}
