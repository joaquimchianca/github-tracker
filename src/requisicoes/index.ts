function searchUser(username: string) {
   return fetch(`https://api.github.com/users/${username}`)
}

function searchRepos(username: string) {
    return fetch(`https://api.github.com/users/${username}/repos?sort=created&per_page=5`)
}

export { searchUser, searchRepos }