import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa"

const fetchRepo = async (name: string, username = "EidanGar") => {
    const response = await fetch(`https://api.github.com/repos/${username}/${name}`);
    if (!response.ok) throw new Error("Failed to fetch repository.");
    const repo = await response.json();
    return repo;
}

const Repo = async ({ name }: { name: string }) => {
    const repo = await fetchRepo(name);

    return (
        <div className="flex flex-col gap-3 items-start">
            <h2 className="text-xl font-semibold text-primary-color">
                {repo.name}
            </h2>
            <p className="text-white-shaded">
                {repo.description}
            </p>
            <div className="flex items-center gap-9 w-full text-white">
                <span className="flex items-center gap-2">
                    <FaStar />
                    <h3>
                        {repo.stargazers_count}
                    </h3>
                </span>
                <span className="flex items-center gap-2">
                    <FaCodeBranch />
                    <h3>
                        {repo.forks_count}
                    </h3>
                </span>
                <span className="flex items-center gap-2">
                    <FaEye />
                    <h3>
                        {repo.watchers_count}
                    </h3>
                </span>
            </div>
        </div>
    )
}

export default Repo;