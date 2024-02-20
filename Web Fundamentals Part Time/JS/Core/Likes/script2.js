document.addEventListener('DOMContentLoaded', function() {
    const likeButtons = document.querySelectorAll('.like-button');

    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const likeCount = button.parentElement.querySelector('.like-count');
            let currentLikes = parseInt(likeCount.textContent);
            currentLikes++;
            likeCount.textContent = `${currentLikes} like(s)`;
        });
    });
});