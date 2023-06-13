import { IncomingMessage } from "http";
import courses from "./data.json";
import { NextResponse } from "next/server";
import { Course } from "@/app/types";
import { v4 as uuidv4 } from 'uuid';

export const GET = async (request: IncomingMessage): Promise<NextResponse<Course[]>> => {
    return NextResponse.json(courses);
}

export const POST = async (request: { json: () => Course }): Promise<NextResponse<Course[]>> => {
    const { title, description, level, link }: Course = await request.json();
    
    const newCourse: Course = {
        id: uuidv4(),
        title,
        description,
        level,
        link
    }

    courses.push(newCourse)

    return NextResponse.json(courses);
}