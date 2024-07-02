document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        star.addEventListener('click', selectRating);
    });
});

function selectRating(event) {
    const selectedValue = event.target.getAttribute('data-value');
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        star.classList.remove('selected');
        if (star.getAttribute('data-value') <= selectedValue) {
            star.classList.add('selected');
        }
    });
}

function submitRating() {
    const selectedStars = document.querySelectorAll('.star.selected').length;
    const comment = document.getElementById('comment').value;
    const commentsList = document.getElementById('comments-list');

    if (selectedStars > 0 && comment) {
        const newComment = document.createElement('li');
        newComment.innerHTML = `<strong>${selectedStars} Stars</strong><p>${comment}</p>`;
        commentsList.appendChild(newComment);

        // Clear the rating and comment
        document.querySelectorAll('.star').forEach(star => star.classList.remove('selected'));
        document.getElementById('comment').value = '';
    } else {
        alert('Please select a rating and leave a comment.');
    }
}
