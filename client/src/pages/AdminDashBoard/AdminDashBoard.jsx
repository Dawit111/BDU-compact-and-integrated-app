import React, { useEffect } from 'react'
import './AdminDashBoard.css'
import NavBar from "../../components/NavBar/NavBar";
import Users from "../../img/users.png"
import Adverts from "../../img/advert.png"
import discussion from "../../img/discussion.png"
import socialPosts from "../../img/socialPosts.png"
import DataTable from './Table';
import Table from './Table';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../actions/UserAction';
import { reducers } from '../../reducers';


const AdminDashBoard = () => {
    const { user } = useSelector((state) => state.authReducer.authData);
    const {users, loading} = useSelector((state) =>state.usersReducer);
    const {adverts} = useSelector((state)=> state.advertReducer);
    const {posts} = useSelector((state)=> state.postReducer);
    const {questions} = useSelector((state)=> state.qaReducer);
    const dispatch = useDispatch();
    useEffect(()=>{
       dispatch(getAllUsers());
    },[])

  return (
    <>
      <NavBar />
      {user.isAdmin &&
     (<div className="main-container">
        <div className="navcontainer">
            <nav className="nav">
                <div className="nav-upper-options">
                    <div className="nav-option option1">
                        <img src={Users}
                            className="nav-img"
                            alt="dashboard"/>
                        <h3> Users</h3>
                    </div>
 
                    <div className="option2 nav-option">
                        <img src={Adverts}
                            className="nav-img"
                            alt="articles"/>
                        <h3> Adverts</h3>
                    </div>
 
                    <div className="nav-option option3">
                        <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/5.png"
                            className="nav-img"
                            alt="report"/>
                        <h3> Report</h3>
                    </div>
 
                    <div className="nav-option option5">
                        <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210183323/10.png"
                            className="nav-img"
                            alt="blog"/>
                        <h3> Q&A categories</h3>
                    </div>

 
                </div>
            </nav>
        </div>
        <div className="main">
            <div className="box-container">
 
                <div className="box box1">
                    <div className="text">
                        <h2 className="topic-heading">{users?.length}</h2>
                        <h2 className="topic">Total Users</h2>
                    </div>
 
                    <img src={Users}

                        alt="users"/>
                </div>
 
                <div className="box box2">
                    <div className="text">
                        <h2 className="topic-heading">{adverts?.length}</h2>
                        <h2 className="topic">Advertisements</h2>
                    </div>
 
                    <img src={Adverts}
                         alt="adverts"/>
                </div>
 
                <div className="box box3">
                    <div className="text">
                        <h2 className="topic-heading">{posts?.length}</h2>
                        <h2 className="topic">Social Posts</h2>
                    </div>
 
                    <img src={socialPosts}
                        alt="posts"/>
                </div>
 
                <div className="box box4">
                    <div className="text">
                        <h2 className="topic-heading">{questions?.length}</h2>
                        <h2 className="topic">Q&A exchanges</h2>
                    </div>
 
                    <img src={discussion}
alt="published"/>
                </div>
            </div>
 
            <div className="report-container">
            <Table data={users} />
            </div>
        </div>
    </div>)  
      }

    </>
   
    )
}

export default AdminDashBoard