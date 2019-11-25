import { Repo } from "./Repo";

export class User {
    login: string;
    fullName: string;
    github_url: string;
    repoCount: number;
    followerCount: number;
    repos?: Repo[];

    constructor(userResponse: any){
        this.login= userResponse.login;
        this.fullName = userResponse.name;
        this.github_url = userResponse.html_url;
        this.repoCount = userResponse.public_repos;
        this.followerCount = userResponse.followers;
        this.repos=[];
    }
}