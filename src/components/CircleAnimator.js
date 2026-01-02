import cardImage from '../assets/card-shape.png';

export function CircleAnimator() {
  // Use the imported image
  const items = Array(8).fill(cardImage);

  const radius = 550; // Increased from 450 to loosen spacing
  const count = items.length;
  const angleStep = 360 / count;

  const itemsHtml = items.map((src, index) => {
    const angle = index * angleStep;
    // Position on the circle:
    // We use a wrapper to rotate to the angle, then translate out.
    // The item itself is inside.
    // To make them "flow" with the circle, we just rotate the wrapper.
    // transform: rotate(angle) translate(radius)
    // If we want them to be upright relative to the center (radiating), that's it.
    // If we want them upright relative to screen, we'd add rotate(-angle) after translate.
    // Coveo style: Radiating (tops pointing out or in).
    // Let's do radiating.

    return `
      <div class="circle-item" style="transform: rotate(${angle}deg) translate(${radius}px) rotate(90deg)">
        <div class="circle-item-inner">
            <img src="${src}" alt="Work ${index + 1}" style="object-fit: contain;" />
        </div>
      </div>
    `;
  }).join('');

  return `
    <div class="circle-animator-container">
      <div class="circle-overlay">
        <h1>Graphic Designer</h1>

      </div>
      <div class="circle-track">
        ${itemsHtml}
      </div>
    </div>
  `;
}
