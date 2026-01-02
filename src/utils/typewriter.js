export class Typewriter {
    constructor(element, words, options = {}) {
        this.element = element;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(options.wait, 10) || 3000;
        this.typeSpeed = parseInt(options.typeSpeed, 10) || 100;
        this.deleteSpeed = parseInt(options.deleteSpeed, 10) || 50;
        this.isDeleting = false;

        // Initial delay before starting
        setTimeout(() => this.type(), 1000);
    }

    type() {
        // Current index of word
        const current = this.wordIndex % this.words.length;
        // Get full text of current word
        const fullTxt = this.words[current];

        // Check if deleting
        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        // Insert txt into element
        this.element.innerHTML = `<span class="wrap">${this.txt}</span>`;

        // Initial Type Speed
        let typeSpeed = this.typeSpeed;

        if (this.isDeleting) {
            typeSpeed = this.deleteSpeed;
        }

        // If word is complete
        if (!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

export function initFooterTypewriter() {
    const txtElement = document.querySelector('.txt-type');
    if (!txtElement) return;

    const words = [
        "branding project",
        "website design project",
        "logo design project",
        "Illustration Project",
        "Full time design position",
        "motion graphic project",
        "Framer website project"
    ];

    new Typewriter(txtElement, words, {
        wait: 2000,
        typeSpeed: 80,
        deleteSpeed: 40
    });
}
