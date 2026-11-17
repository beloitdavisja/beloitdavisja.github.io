import { Component } from '@angular/core';
import { runnerval } from '../data/runnerval';

@Component({
  selector: 'app-runnerval-section',
  template: `
    <section class="section" id="runnerval">
      <div class="wrap">
        <p class="eyebrow">Featured project</p>
        <h2>{{ app.name }}</h2>
        <p class="sub">{{ app.tagline }}</p>

        <div class="rv-grid">
          <div class="rv-copy">
            <p>{{ app.summary }}</p>
            <p class="note">{{ app.builtWith }}</p>
            <ul class="chips" aria-label="Technologies">
              @for (tech of app.stack; track tech) {
                <li>{{ tech }}</li>
              }
            </ul>
            <a class="btn primary" [href]="app.appStoreUrl" target="_blank" rel="noopener">
              View on the App Store
            </a>
          </div>

          <ul class="shots" aria-label="Runnerval screenshots">
            @for (shot of app.screenshots; track shot.src) {
              <li>
                <img [src]="shot.src" [alt]="shot.alt" width="507" height="1100" loading="lazy" />
              </li>
            }
          </ul>
        </div>

        <h3 class="rv-h3">What I built</h3>
        <div class="cards">
          @for (item of app.highlights; track item.title) {
            <article class="card">
              <h4>{{ item.title }}</h4>
              <p>{{ item.text }}</p>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class RunnervalSection {
  protected readonly app = runnerval;
}
