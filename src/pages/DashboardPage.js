import { Link } from 'react-router-dom'; 
// import Tile from '../components/Tile/Tile'
import { formatTime } from '../services/utilities';

import '../index.css'

export default function DashboardPage(props) { 

  const postList = props.posts.map(( post, idx ) => (
    <div key={idx}>
      <h2>{idx + 1}</h2>
  <p>{post.textPost}</p>
  <p>{formatTime(post.seconds)}</p>
    </div>
  ))
    return (
      <main className='Page'> 
        <div className="form-group" >
          <div className="col-sm-12 text-center">
            <div>
            
            </div>
            <Link to='/create'>Create New Post</Link>
          <h1 >{postList}</h1>
          </div>
        </div>
  </main>
    )}
