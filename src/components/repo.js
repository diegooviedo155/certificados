import React from 'react';

const Repo= (props)=> (
    <li className="flex items-center mx-3">
        <div className="w-9/12 overflow-x-hidden mt-2">
            <h4 className="text-blue-600 font-bold">{props.repo.name}</h4>
            <p className="text-sm text-gray-800 overflow-y-hidden" style={{height:"1.5rem"}}>{props.repo.description}</p>
        </div>
        <div className="flex-1 content-right text-blue-400 border-2 rounded-md text-center">
            <a href={props.repo.html_url} target="_blank" rel="noopener noreferrer">Ver</a>
        </div>
    </li>
);

export default Repo;