import Link from "next/link";
import { Course } from "@/app/types";

const fetchCourses = async (): Promise<Course[]> => {
    const response = await fetch("http://localhost:3000/api/courses");
    if (!response.ok) throw new Error("Filed to fetch courses.");
    const courses = await response.json();
    return courses;
}

const Courses = async () => {
    const courses = await fetchCourses();

    return (
        <div className="grid__system">
            {courses.map((course) => (
                <div key={course.id} className="card">
                    <h2 className="text-primary-color font-semibold text-xl">
                        {course.title}
                    </h2>
                    <span className="text-lg font-medium">
                        Level: {course.level}
                    </span>
                    <p className="text-white-shaded">
                        {course.description}
                    </p>
                    <Link className="mt-auto px-4 py-2 bg-dark rounded-lg font-bold transition-colors duration-300 hover:bg-white-shaded hover:text-dark" href={course.link} target="_blank">
                        Go To Course
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Courses;