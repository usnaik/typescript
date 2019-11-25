import * as request from 'request';
import { User } from "./User";
import { Repo } from './Repo';

const OPTIONS: any = {
    headers: { 'User-Agent': 'request-usnaik' },
    json: true
};

export class GitHubApiService {

    getUserInfo(userName: string, callback: (user: User) => any) {
        request.get("https://api.github.com/users/" + userName,
            OPTIONS,
            (error: any, response: any, body: any) => {
                let user = new User(body);
                callback(user);
            }
        );
    }

    getRepos(userName: string, callback: (repos: Repo[]) => any) {
        request.get("https://api.github.com/users/"+ userName + "/repos",
            OPTIONS,
            (error: any, response: any, body: any) => {
                let repos : Repo [] = body.map((repo: any) => new Repo(repo))
                callback(repos);
            }
        );
    }

}