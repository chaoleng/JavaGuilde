/**
 * ========================================
 * Card Ripple Effect
 * ========================================
 * Adds an interactive ripple animation when cards are clicked
 */
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function(e) {
        // Create ripple element
        const ripple = document.createElement('div');

        // Style the ripple
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(102, 126, 234, 0.3)';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.left = e.offsetX - 10 + 'px';
        ripple.style.top = e.offsetY - 10 + 'px';
        ripple.style.animation = 'ripple 0.6s ease-out';
        ripple.style.pointerEvents = 'none';

        // Add ripple to card
        this.appendChild(ripple);

        // Remove ripple after animation
        setTimeout(() => ripple.remove(), 600);
    });
});

/**
 * ========================================
 * Ripple Animation Keyframes
 * ========================================
 * Dynamically inject CSS animation for ripple effect
 */
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(20);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
