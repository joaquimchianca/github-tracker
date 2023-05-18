import type IRepository from "../interface/IRepository";
import type IUsuario from "../interface/IUsuario";

function mountUser(userJson: any, reposJson: any): IUsuario {
    const recentRepos: IRepository[] = []

    if(reposJson.length !== 0 ) {
        reposJson.forEach((element: any) => {
            recentRepos.push({
                name: element.name,
                url: element.html_url,
                language: element.language
            })
        });
    }


    return {
        avatar: userJson.avatar_url,
        followers: userJson.followers,
        location: userJson.location,
        login: userJson.login,
        name: userJson.name,
        profileUrl: userJson.html_url,
        publicRepos: userJson.public_repos,
        repositories: recentRepos
      }
}

export {mountUser}