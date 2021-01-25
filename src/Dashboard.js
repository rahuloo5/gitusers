import React from 'react'
import Navabr from './Components/Navabr'
import Search from './Components/Searchbar'

import User from './Components/User'
import Repo from './Components/Repo'
import Infobar from './Components/Infobar'

function Dashboard() {
    return (
        <div>
            <h1>Users</h1>
            <Infobar/>
            <User />
            
        </div>
    )
}

export default Dashboard
