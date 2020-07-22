// Init github
const gitHub = new Github;
// Unit UI
const ui = new UI;

// Search Input
const searchUser = document.getElementById('searchUser');

// Search Input Event Listener
searchUser.addEventListener('keyup', (e) => {
    // Get Input Text
    const userText = e.target.value;
    if (userText !== '') {
        // Make HTTP Call
        gitHub.getUser(userText)
            .then(data => {
                console.log(data);
                if (data.profile.message === 'Not Found') {
                    // Show Alert
                    ui.showAlert('User Not Found', 'alert alert-danger');
                } else {
                    // Show Profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
    } else {
        // Clear Profile
        ui.clearProfile();
    }
})    