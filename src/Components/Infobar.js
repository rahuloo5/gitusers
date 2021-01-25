import React ,{useContext} from 'react'
import {GithubContext} from '../Context'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import PeopleIcon from '@material-ui/icons/People';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import CodeIcon from '@material-ui/icons/Code';
import InfoData from './InfoData'

 

function Infobar() {
    const {githubuser} = React.useContext(GithubContext)
    console.log(githubuser)
    const{public_repos,followers,following,public_gists} = githubuser

    const data = [{
        id:1,
        icon:<LibraryBooksIcon size={23}/>,
        repos:public_repos,
        title:"Repos",
        color:'pink'
    },
    {
        id:2,
        icon:<PeopleIcon size ={23}/>,
        repos:following,
        title:"Following",
        color:'green'
    },
    {
        id:3,
        icon:<PersonAddIcon size={23}/>,
        repos:followers,
        title:"Followers",
        color:'purple'
    },
    {
        id:4,
        icon:<CodeIcon size={23}/>,
        repos:public_gists,
        title:"Gists",
        color:'yellow'
    }]

    return (
        <div>
            <div style={{display:'flex' , justifyContent:'space-around'}}>
           {data.map((item)=>{return<InfoData key={item.id} {...item}/>})}
           </div>
        </div>
    )
}

export default Infobar
