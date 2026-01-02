
import { Grid } from './Grid.js';

export function WorkPage() {
  return `
    <div class="work-page" style="padding-top: 120px; min-height: 100vh;">
        <div style="max-width: 1440px; margin: 0 auto; padding: 0 var(--spacing-md);">
            <h1 style="font-size: clamp(3rem, 6vw, 5rem); margin-bottom: var(--spacing-lg);">Selected Work</h1>
        </div>
        ${Grid()}
    </div>
  `;
}
