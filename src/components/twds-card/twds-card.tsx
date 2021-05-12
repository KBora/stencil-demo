import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'twds-card',
  styleUrl: 'twds-card.css',
  shadow: false,
})
export class TwdsCard {

  @Prop() cardImageUrl: string;

  @Prop() cardImageAlt: string;

  @Prop() cardTitle: string;

  @Prop() cardText: string;

  @Prop() cardTags: string[] = ["hope", "uncertainty", "joy", "peace"];

  @Event() tagClick: EventEmitter;
  
  private handleTagClick(event: Event, tag: string): void {
    event.preventDefault();
    this.tagClick.emit(tag);
  }

  render() {
    return (
      <Host>
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img class="w-full" src={this.cardImageUrl} alt={this.cardImageAlt} />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{this.cardTitle}</div>
            <p class="text-gray-700 text-base">
              {this.cardText}
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            { this.cardTags.map( tag => 
              <span 
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer"
                onClick={$event => this.handleTagClick($event, tag)}
              >
                  #{tag}
              </span>
            )}
            </div>
        </div>
      </Host>  
    );
  }

}
