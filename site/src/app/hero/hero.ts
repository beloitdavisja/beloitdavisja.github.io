import { Component } from '@angular/core';
import { profile } from '../data/profile';

@Component({
  selector: 'app-hero',
  template: `
    <header class="hero" id="top">
      <div class="wrap">
        <p class="eyebrow">{{ profile.title }}</p>
        <h1>{{ profile.name }}</h1>
        <p class="lede">{{ profile.pitch }}</p>
        <div class="actions">
          <a class="btn primary" [href]="profile.linkedIn" target="_blank" rel="noopener">
            Connect on LinkedIn
          </a>
          <a class="btn" href="#runnerval">See my work</a>
        </div>
      </div>
    </header>
  `,
})
export class Hero {
  protected readonly profile = profile;
}
