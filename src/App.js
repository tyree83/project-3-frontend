
import { useState, useEffect } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

import './App.css';

import { getUser, logout } from './services/userService';
import { fetchPostData, addPostData } from './services/postService';


import CreatePost from './components/CreatePost/CreatePost';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import FeedPage from './pages/FeedPage/FeedPage'
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';


function App(props) {
  /* helper functions */
  
  /* **********user********** */
  const [ userState, setUserState ] = useState({ user: getUser()});

  function handleSignupOrLogin() {
    // place user into state using the setter function
    setUserState({ user: getUser() });
    // programmatically route user to Feed
    props.history.push('/feed');
  }

  function handleLogout() {
    logout(); 
    setUserState({ user: null }); 
    props.history.push('/');
  }

   /* **********posts********** */
   const [posts, setPosts]= useState([{
    whoPosted: "",
    datePosted: "",
    location: "",
    textPost: "",
    imgURL: '',

  }])

  async function getPosts() {
    const data = await fetchPostData();
    setPosts(data);
  }
  
  useEffect(()=>{
   getPosts()
 },[])

    function handleChange(event) {
        setPosts(prevState => ({
            ...prevState,
          [event.target.name]: event.target.value
        }));
      }

    async function handleSubmit(event){
        try {
            await addPostData(posts);
            props.history.push('/feed');
          } catch (event) {
            console.log(addPostData)
          }
    }

  return (
    <div className="App">
      <Header user={userState.user} handleLogout={handleLogout} />
        <Switch>
          <Route exact path="/" render={ props => 
            <LoginPage handleSignupOrLogin={handleSignupOrLogin} />
          } />
          <Route exact path="/feed" render={ props => 
            getUser() ?
              <FeedPage {...props} posts={posts} />
                :
                <Redirect to="/login" />
          } />
          <Route exact path="/create" render={ props => 
            getUser() ?
              <CreatePost posts={posts} setPosts={setPosts} handleChange={handleChange} handleSubmit={handleSubmit} {...props}/>
              :
              <Redirect to="/login" />
              
          } />
          <Route exact path="/signup" render={ props => 
            <SignupPage handleSignupOrLogin={handleSignupOrLogin} />
          } />
        </Switch>
      <Footer />
    </div>
  );
}

export default withRouter(App);