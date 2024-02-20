const likeButton = document.querySelector('.like-button');


const likeCountElement = document.querySelector('.like-count');

let likeCount = 3;

function incrementLikes() {
    
    likeCount++;

    likeCountElement.textContent = likeCount + ' like(s)';
}


likeButton.addEventListener('click', incrementLikes);
