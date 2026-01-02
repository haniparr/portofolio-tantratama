export function SkillTicker() {
    const row1 = [
        "Development", "UI/UX Design", "E-commerce", "Product Design",
        "Development", "UI/UX Design", "E-commerce", "Product Design",
        "Development", "UI/UX Design", "E-commerce", "Product Design"
    ];

    const row2 = [
        "Packaging", "Art Direction", "Content", "Brand Identity",
        "Packaging", "Art Direction", "Content", "Brand Identity",
        "Packaging", "Art Direction", "Content", "Brand Identity"
    ];

    const renderRow = (items, reverse = false) => `
        <div class="ticker-track ${reverse ? 'reverse' : ''}">
            <div class="ticker-content">
                ${items.map(item => `
                    <div class="ticker-item">
                        <div class="ticker-placeholder"></div>
                        ${item}
                    </div>
                `).join('')}
                ${items.map(item => `
                    <div class="ticker-item">
                        <div class="ticker-placeholder"></div>
                        ${item}
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    return `
        <section class="skill-ticker-section">
            <div class="ticker-wrapper">
                ${renderRow(row1)}
                ${renderRow(row2, true)}
            </div>
        </section>
    `;
}
