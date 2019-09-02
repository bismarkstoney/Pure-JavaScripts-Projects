class GitHUB{
    constructor(){
    this.client_id='';
    this.client_secret=''

}


async getUser(user){
    const resposnseProfile= await fetch (`https://api.githu.com/uesrs${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const profile = await resposnseProfile.json();
    return profile;
}
}