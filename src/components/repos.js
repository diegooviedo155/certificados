import React, { useEffect, useState } from 'react'
// import repos from '../data/repos';
import Repo from './repo';

const Repos = () =>{

    const [repos,setRepos] = useState([]);

    useEffect(() => {

        const data = sessionStorage.getItem("repos");
        let myRepos;
        if(data){
        myRepos = JSON.parse(data);
        }

        async function fetchRepos(){
            const response = await fetch("https://api.github.com/users/diegooviedo155/repos");
            myRepos = await response.json();
        
            sessionStorage.setItem("repos", JSON.stringify(myRepos));

            setRepos(myRepos);
        }
        fetchRepos();
        
    },[]);

return(
        <div className="max-w-4xl mx-auto">
            <header className="text-center">
                <h2 className="text-3xl font-bold mt-12">Mi trabajo en Open Source</h2>
                <p>Colaboracion y contribucion de Codigo</p>
            </header>

            <ul className="repos-list">
                {
                    repos.map((repo)=>{
                        return <Repo repo={repo} key={repo.id}/>
                    })
                }
            </ul>
        </div>
)
}

export default Repos;