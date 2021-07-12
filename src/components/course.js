import React from 'react'

const courses = (props) => {
    const course = props.element;
    return (
        <div className=" flex flex-col justify-between shadow p-8 bg-white  mx-4 rounded">
            <h4 className="font-bold">{course.title}</h4>
            <div className="text-center ">
                <span className="inline-block bg-blue-200 p-2 mt-1 text-blue-900 rounded-md ">
                    Progreso: {parseInt(course.progress)}%
                </span>
                <a href={course.url} target="_blank" rel="noreferrer" className="font-normal text-blue-600">Ver Más</a>
            </div>
        </div>
    )
};

export default courses;