//importing required files

import axios from 'axios';
import React,{useState,useEffect} from 'react'
import './App.css';
import Header from './Header';
import Charactergrid from './Charactergrid';
import Search from './Search';
import Pagination from './Pagination';
import Footer from './Footer';

function App() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);


  useEffect(()=>{
    const fetchdata = async() => {
      setIsLoading(true)
      const show_result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
        )
      console.log(show_result.data)

      setItems(show_result.data)
      setIsLoading(false)

    } 
    fetchdata()
    
  },[query])

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="Container">
      <Header />                                                                                {/* Calling Header Section */}                 
      <Search getQuery={(q) => setQuery(q)}/>                                                   {/* Calling Search Component */} 
      <Charactergrid isLoading={isLoading} items={currentPosts}/>                               {/* Calling Pagination Section */} 
      <Pagination postsPerPage={postsPerPage}  totalPosts={items.length}  paginate={paginate}/>
      <div >
      <Footer/>                                                                                 {/* Calling Footer Section */} 
      </div>
    </div>

  );
}

export default App;
