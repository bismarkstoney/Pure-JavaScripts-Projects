class Github{
    constructor(){
        this.client_id='ADD A REQUEST TO YOUR KEY';
        this.client_secret='ADD YOUR SECRET';
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
