// Init GitHub class
const github = new GitHub;

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

        } else {
          // Show profile 
        }
      })
  } else {
    // Clear profile
    
  }
});