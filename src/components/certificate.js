import React from 'react'

const certificate = (props) => {
    const certificate=props.element;
    return (
        <div className="flex flex-col justify-between shadow p-8  bg-white mx-4 rounded">
            <h4 className="font-bold">
                {certificate.title}
            </h4>
            <div className="text-center">
                <span className="inline-block bg-blue-200 text-blue-900 p-2 mt-2 rounded-md">Calificación: {certificate.score}</span>
            </div>
        </div>
    )
};

export default certificate;