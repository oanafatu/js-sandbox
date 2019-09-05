class GitHub {
  constructor(){
    this.client_id = 'e5be6e925e11fd91e0eb'
    this.client_secret = '4a133d4695013d30c140f005d7571c3ca35607ac'
    this.repos_count = 5;
    this.repos_sort = 'created: asc'
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const profile = await profileResponse.json();

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const repos = await repoResponse.json();
    
    return {
      profile,
      repos
    }
  }

}