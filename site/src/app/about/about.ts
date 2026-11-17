import { Component } from '@angular/core';
import { about } from '../data/about';

@Component({
  selector: 'app-about',
  template: `
    <section class="section" id="about">
      <div class="wrap">
        <p class="eyebrow">About me</p>
        <h2>Modernizing systems and shipping software</h2>

        <div class="about-copy">
          @for (p of data.paragraphs; track p) {
            <p>{{ p }}</p>
          }
        </div>

        <h3 class="rv-h3">Skills</h3>
        <div class="cards">
          @for (group of data.skills; track group.name) {
            <article class="card">
              <h4>{{ group.name }}</h4>
              <ul class="chips">
                @for (item of group.items; track item) {
                  <li>{{ item }}</li>
                }
              </ul>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class About {
  protected readonly data = about;
}
