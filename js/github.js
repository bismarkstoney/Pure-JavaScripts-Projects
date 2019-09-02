class Github{
    constructor(){
        this.client_id='3f046cabe324c593d18a';
        this.client_secret='3162c53e1a00dc62273543a7bc801e5cfaf979d9';
        //count for repos
        this.repos_count=5;
        this.repos_sort='created:asc'
    }

   async getUser(user){
       const profileResponse =  await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

      //repos
      const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

       const profile = await profileResponse.json();
      const repos= await  repoResponse.json();
       return {profile, repos
    
    }
       


    }
}