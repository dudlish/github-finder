class Github {
    constructor() {
        this.client_id = 'fe4de9fe7c73acdb6859';
        this.client_secret = '434c6d1f0f27b43c5c22d5f5a7291a1ecdaaed48';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    // GET User Method
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return {
            profile,
            repos
        }
    }
}