// == Import
import githubLogo from './github.svg';
import Message from 'src/components/Message';
import ReposResults from 'src/components/ReposResults';
import SearchBar from 'src/components/SearchBar';
import {useState } from 'react';
import React from 'react';
import axios from 'axios';

import './styles.css';


// == Composant



const App = () => {

  const [valueApi, setValueApi] = useState('')
  const [resultApi, setResultApi] = useState('')


   
   
  const githubValue = async () => {
    await axios.get(`https://api.github.com/search/repositories?q=${valueApi}`)
      .then(res => {
        const results = res.data.items;
        console.log(results)
        setResultApi({results});
      }) }


  return (
    <div className="app">
     <div>
       <img className="logo_home_page" src={githubLogo} alt="github logo" />
       </div>
       <SearchBar setValueApi={setValueApi}
       githubValue={githubValue}/>
       {<ReposResults resultApi={resultApi.results}/> }
      
    </div>
  );
}

export default App

