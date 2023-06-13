import { NextResponse } from "next/server";
import { IncomingMessage } from "http";
import courses from "../data.json";

export const Get = async (request: IncomingMessage) => {
    const { searchParams } = new URL(request.url || "", "http://localhost");
    const query = searchParams.get('query');
    const filteredCourses = courses.filter((course) => {
        return course.title.toLowerCase().includes((query ?? "").toLowerCase())
    })
    return NextResponse.json(filteredCourses);
};
