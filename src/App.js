import React from 'react';
import Header from './components/header/header';
import PostCard from "./components/header/postCard";

class App extends React.Component {

  render(){
    return (
        <>
          <Header/>
          <PostCard/>

        </>
    )
  }
}

export default App;
