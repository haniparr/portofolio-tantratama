/**
 * Reusable Button Components
 */

/**
 * Primary Button - White pill-shaped button with hover effect
 * @param {string} text - Button label
 * @param {string} [id] - Optional button ID
 * @returns {string} HTML string for the button
 */
export function PrimaryButton(text, id = '') {
    const idAttr = id ? `id="${id}"` : '';
    return `<button class="btn-primary" ${idAttr}>${text}</button>`;
}

/**
 * Primary Link Button - Same styling but as an anchor tag
 * @param {string} text - Link label
 * @param {string} href - Link URL
 * @returns {string} HTML string for the link button
 */
export function PrimaryLinkButton(text, href = '#') {
    return `<a href="${href}" class="btn-primary">${text}</a>`;
}
