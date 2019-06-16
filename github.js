class GitHub {
  constructor() {
    this.client_id = '20a21b93e85dbbc583c0';
    this.client_secret = '304584ac04383575afea348b59563c53d4c26a6f';
  }

  // Get User Method
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}