import { CircleAnimator } from './CircleAnimator.js';

export function Hero() {
  return `
        <section class="hero" id="hero">
            ${CircleAnimator()}
            
            <div class="hero-overlay-content">
                 <div class="hero-cta-wrapper">
                    <button class="btn-primary">View Selected Work</button>
                 </div>
            </div>
        </section>
    `;
}
