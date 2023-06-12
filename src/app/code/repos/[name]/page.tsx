import Repo from "@/app/components/Repo";
import Link from "next/link";
import RepoDirs from "@/app/components/RepoDirs";

interface RepoParams {
    params: {
        name: string
    }
}

const RepoPage = ({ params: { name } }: RepoParams) => {
    return (
        <div className="flex bg-dark-shaded flex-col items-start justify-center gap-3 rounded-xl p-5">
            <Link className="px-4 py-2 bg-dark rounded-lg font-bold transition-colors duration-300 hover:bg-white-shaded hover:text-dark" href="/code/repos">
                Back to Repositories
            </Link>
            <Repo name={name} />
            <RepoDirs name={name} />
        </div>
    );
}

export default RepoPage;