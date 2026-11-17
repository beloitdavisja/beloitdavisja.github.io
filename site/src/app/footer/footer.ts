import { Component } from '@angular/core';
import { profile } from '../data/profile';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <div class="wrap">
        <p>
          <a [href]="profile.linkedIn" target="_blank" rel="noopener">Find me on LinkedIn</a>
        </p>
        <p class="small">
          <a href="runnerval/privacy.html">Runnerval privacy</a> ·
          <a href="runnerval/terms.html">Terms</a> ·
          <a href="runnerval/support.html">Support</a>
        </p>
      </div>
    </footer>
  `,
})
export class Footer {
  protected readonly profile = profile;
}
