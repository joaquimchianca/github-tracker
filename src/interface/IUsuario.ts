import type IRepository from "./IRepository"

export default interface IUsuario {
    login: string
    avatar: string
    profileUrl: string
    name: string
    location: string
    publicRepos: number
    followers: number
    repositories: IRepository[]
}