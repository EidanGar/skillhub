export interface Repository {
    name: string;
    html_url: string;
    description: string;
    created_at: string;
    language: string;
    topics: string[];
    stargazers_count: number;
    watchers_count: number;
    forks_count: number;
}

export interface RepositoryData {
    name: string;
    path: string;
    sha: string;
    size: number;
    url: string;
    html_url: string;
    git_url: string;
    download_url: string | null;
    type: string;
    _links: {
        self: string;
        git: string;
        html: string;
    }
}

export interface Course {
    id: string;
    title: string;
    description: string;
    link: string;
    level: string;
}