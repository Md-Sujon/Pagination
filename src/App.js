import React,{useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Post from './component/Post';
import Pagination from './component/Pagination';

const App = () => {
  const [user, setUser]=useState([]);
  const [loading, setLoading] =useState(false);
  const [page, setPage] =useState(1);
  const [postPerPage] =useState(3);
    
useEffect(() => {
  const fetchPosts = async () =>{
    setLoading(true);
    const res = await axios.get("https://reqres.in/api/users?page=2")
    setLoading(false);
    setUser(res.data.data);
    
  }
  fetchPosts();
  
},[])

const indexofLastUser = page * postPerPage;
const indexofFirstUser = indexofLastUser - postPerPage;
const currentUser = user.slice(indexofFirstUser, indexofLastUser) 


const pagination = pageNumber => setPage(pageNumber)

  return (
    <div className="App">
      <h1 className="text-primary">Pagination</h1>
      {
        loading ? <p>Loading...</p> : <>
        <Post user={currentUser} page={page}/>
        <Pagination postPerPage={postPerPage} totalUser={user.length} pagination={pagination}/>
        </>
        
      }
    </div>
  );
};

export default App;
