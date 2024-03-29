// Init GitHub class
const github = new GitHub;

// Init UI class
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // get input text
  const userText = e.target.value;

  if(userText !== ''){
    // Make HTTP Call
    github.getUser(userText)
      .then(data => {
        if(data.profile.message == 'Not Found') {
          // Show Alert
          ui.showAlert('User Not Found', 'alert alert-danger');
        } else {
          // Show profile 
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      })
  } else {
    // Clear profile
    ui.clearProfile();
  }
});