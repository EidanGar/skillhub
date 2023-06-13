import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";
import { Repository } from "@/app/types";

const fetchRepos = async () => {
    const response = await fetch("https://api.github.com/users/EidanGar/repos", {
        next: {
            revalidate: 60
        }
    });
    if (!response.ok) throw new Error("Failed to fetch repositories.");

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const repos = await response.json();
    return repos;
}

const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const month = date.toLocaleString('en-US', { month: 'long' });
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
}
  
const RepositoryCard = ({
    name,
    html_url,
    description,
    created_at,
    language,
    topics,
    forks_count,
    watchers_count,
    stargazers_count
}: Repository) => {
    return (
        <Link href={`/code/repos/${name}`} className="card hover:-translate-y-2 duration-300 cursor-pointer transition-transform">
            <h2 className="text-xl text-primary-color font-semibold text-left mb-0">
                {name}
            </h2>
            <p className="text-white-shaded text-left">
                {description}
            </p>
            <div className="flex items-center justify-start flex-wrap gap-y-2 gap-x-3 w-full">
                {topics.map((topic, idx) => <span key={idx} className="py-1 px-2 bg-dark text-white rounded-lg">{topic}</span>)}
            </div>
            <div className="flex items-center justify-between w-full">
                <span className="text-white-shaded">{formatDate(created_at)}</span>
                <span className="text-white-shaded">{language}</span>
            </div>
            <div className="flex items-center justify-between w-full text-white">
                <span className="flex items-center gap-2">
                    <FaStar />
                    <h3>
                        {stargazers_count}
                    </h3>
                </span>
                <span className="flex items-center gap-2">
                    <FaCodeBranch />
                    <h3>
                        {forks_count}
                    </h3>
                </span>
                <span className="flex items-center gap-2">
                    <FaEye />
                    <h3>
                        {watchers_count}
                    </h3>
                </span>
            </div>
        </Link>
    )
}

const ReposPage = async () => {
    const repos = await fetchRepos();

    return (
    <div className="mx-auto">
        <h2 className="font-medium mb-5 text-2xl">
            Repositories
        </h2>
        <div className="grid__system">
            {repos.reverse().map((repo: Repository, idx: number) => (
                <RepositoryCard {...{key:idx, ...repo}} />
            ))}
        </div>
    </div>
    )
}

export default ReposPage;