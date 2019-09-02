const searchUser =document.getElementById('searchUser')
const github=new Github;
//UI
const ui=new UI;


//search input event listiner

searchUser.addEventListener('keyup', (e)=>{

    //getinput text
    const userText=e.target.value;
    if (userText !=='') {
        //make http call
        github.getUser(userText)
        .then(data=> {
            if (data.message === 'Not Found') {
                //Show alert message:- message and bootstrap class
                ui.showAlert("User not found", 'alert alert-danger')
                
            } else {
              //show profile
              ui.showProfile(data.profile);
              ui.showRepos(data.repos)
              //console.log(data)
            }
        })

        
    } else {
           //clear the profile
           ui.clearProfile();
    }
})