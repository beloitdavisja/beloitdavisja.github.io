import { Component } from '@angular/core';
import { About } from './about/about';
import { Footer } from './footer/footer';
import { Hero } from './hero/hero';
import { RunnervalSection } from './runnerval-section/runnerval-section';
import { WoodworkingGallery } from './woodworking-gallery/woodworking-gallery';

@Component({
  selector: 'app-root',
  imports: [Hero, About, RunnervalSection, WoodworkingGallery, Footer],
  template: `
    <app-hero />
    <main>
      <app-about />
      <app-runnerval-section />
      <app-woodworking-gallery />
    </main>
    <app-footer />
  `,
})
export class App {}
