export function GradualBlur(options = {}) {
    const config = {
        position: 'bottom', // 'top' or 'bottom'
        strength: 2, // Blur strength multiplier
        height: '120px',
        divCount: 8, // Number of layers for smoothness
        zIndex: 50,
        ...options
    };

    const container = document.createElement('div');
    container.className = `gradual-blur gradual-blur-${config.position}`;

    Object.assign(container.style, {
        position: 'fixed',
        left: '0',
        right: '0',
        [config.position]: '0',
        height: config.height,
        zIndex: config.zIndex,
        pointerEvents: 'none',
        overflow: 'hidden'
    });

    // Create layers
    for (let i = 1; i <= config.divCount; i++) {
        const layer = document.createElement('div');
        const progress = i / config.divCount;

        // Calculate blur amount (exponential-ish curve for natural look)
        const blurAmount = (Math.pow(i, 2) / Math.pow(config.divCount, 2)) * config.strength;

        // Calculate gradient mask
        // We want the blur to be strongest at the edge (0%) and fade out inwards (100%)
        // For 'bottom': bottom is 0%, top of div is 100%
        // mask-image gradient direction: to bottom (top->bottom) or to top (bottom->top)

        let gradientDirection;
        if (config.position === 'bottom') {
            gradientDirection = 'to bottom';
            // We want transparency at the top of the div, solid at the bottom?
            // Actually, the React code uses a complex band logic.
            // Let's try a simpler stacking approach which is often sufficient.
            // Layer i has blur X. Mask it so it only shows in the bottom X%.

            // Let's stick to the React code's logic which creates bands.
            // It calculates p1, p2, p3, p4.
        } else {
            gradientDirection = 'to top';
        }

        // Simplified logic from the reference:
        // Each layer has a constant blur, but is masked to a specific gradient band?
        // No, the reference code sets `backdropFilter` based on `blurValue`.
        // And `maskImage` is `linear-gradient(${direction}, ${gradient})`.

        // Let's try to replicate the "band" logic for best results.
        const increment = 100 / config.divCount;
        const p1 = (increment * i - increment).toFixed(1);
        const p2 = (increment * i).toFixed(1);
        const p3 = (increment * i + increment).toFixed(1);
        const p4 = (increment * i + increment * 2).toFixed(1);

        // The gradient logic in the reference seems to define a "solid" band of black (visible) 
        // surrounded by transparent?
        // `transparent ${p1}%, black ${p2}%` ... `, black ${p3}%` ... `, transparent ${p4}%`
        // This creates a fading in and out band for this specific blur level.

        // Direction:
        // If position is 'bottom', gradient should be 'to bottom'.
        // 0% is top, 100% is bottom.
        // We want the blur to be at the bottom.
        // So the bands should start from the "clear" side and go to "blurred" side?
        // Wait, if we stack bands:
        // Band 1: Low blur, near the "start" of the blur area.
        // Band N: High blur, near the "end" (edge) of the blur area.

        // If position is bottom, the "edge" is the bottom of the screen.
        // So we want high blur at bottom (100% of div) and low blur at top (0% of div).

        // The reference code uses `getGradientDirection`.
        // bottom -> 'to bottom'.

        const direction = config.position === 'bottom' ? 'to bottom' : 'to top';

        let gradient = `transparent ${p1}%, black ${p2}%`;
        if (parseFloat(p3) <= 100) gradient += `, black ${p3}%`;
        if (parseFloat(p4) <= 100) gradient += `, transparent ${p4}%`;

        Object.assign(layer.style, {
            position: 'absolute',
            inset: '0',
            maskImage: `linear-gradient(${direction}, ${gradient})`,
            webkitMaskImage: `linear-gradient(${direction}, ${gradient})`,
            backdropFilter: `blur(${blurAmount}px)`,
            webkitBackdropFilter: `blur(${blurAmount}px)`
        });

        container.appendChild(layer);
    }

    return container;
}

export function initGradualBlur() {
    const app = document.querySelector('#app');

    // Add Top Blur
    const topBlur = GradualBlur({
        position: 'top',
        height: '100px',
        strength: 2,
        divCount: 6
    });

    // Add Bottom Blur
    const bottomBlur = GradualBlur({
        position: 'bottom',
        height: '100px',
        strength: 2,
        divCount: 6
    });

    app.appendChild(topBlur);
    app.appendChild(bottomBlur);
}
