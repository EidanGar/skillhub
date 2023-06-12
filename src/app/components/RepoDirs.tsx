import Link from "next/link";
import { RepositoryData } from "@/app/types";

const fetchReposContents = async (name: string, username = "EidanGar") => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const response = await fetch(`https://api.github.com/repos/${username}/${name}/contents`);
    if (!response.ok) throw new Error("Failed to fetch repository's content.");
    const repoContent = await response.json();
    return repoContent;
}

const RepoDirs = async ({ name }: { name: string }) => {
    const contents: RepositoryData[] = await fetchReposContents(name);
    const dirs = contents.filter((content) => content.type === "dir");
    console.log(contents);

    return (
        <div>
            <h3 className="text-xl text-white-shaded font-semibold">
                Directories
            </h3>
            <ul>
                {dirs.map((dir) => (
                    <li key={dir.path}>
                        <Link href={`/code/repos/${name}/${dir.path}`}>
                            {"> "}
                            <span className="text-primary-color hover:opacity-80 duration-300 transition-opacity">
                                {dir.path}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RepoDirs;