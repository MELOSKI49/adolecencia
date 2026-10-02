document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.quiz-btn');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const isActive = button.classList.contains('is-active');
            buttons.forEach((btn) => btn.classList.remove('is-active'));
            if (!isActive) {
                button.classList.add('is-active');
            }
        });
    });
});
