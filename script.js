document.addEventListener('DOMContentLoaded', function() {
    const profileForm = document.getElementById('profileForm');
    const messageDiv = document.getElementById('message');

    profileForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(profileForm);

        fetch('process_profile.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            messageDiv.textContent = data;
            profileForm.reset();
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});
