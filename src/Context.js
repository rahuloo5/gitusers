import React, { useState } from 'react'
import mockUser from './mockData/mockUser'
import mockFollower from './mockData/mockFollowers'
import mockRepos  from './mockData/mockRepos'

const API = 'https://api.github.com'

const GithubContext = React.createContext()


const Context =({children})=> {

    const [githubuser , setGithubUser] = useState(mockUser)
    const [githubFollower , setGithubFollower] = useState(mockFollower)
    const [githubRepo , setGithubRepo] = useState(mockRepos)


    return (
        <GithubContext.Provider value={{githubuser,githubRepo,githubFollower}}>
            {children}
            
        </GithubContext.Provider>
    )
}

export {Context,GithubContext}
