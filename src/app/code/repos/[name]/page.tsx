import { Suspense } from "react";
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
        <div className="card mx-auto">
            <Link className="px-4 py-2 bg-dark rounded-lg font-bold transition-colors duration-300 hover:bg-white-shaded hover:text-dark" href="/code/repos">
                Back to Repositories
            </Link>
            <Suspense fallback={<div>Loading repo...</div>}>
                <Repo name={name} />
            </Suspense>
            <Suspense fallback={<div>Loading directories...</div>}>
                <RepoDirs name={name} />
            </Suspense>
        </div>
    );
}

export default RepoPage;