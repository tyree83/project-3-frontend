import { Link } from 'react-router-dom';
// import FeedModule from '../../components/FeedModule/FeedModule';
import styles from './FeedPage.module.css';



export default function FeedPage (props) {
  
    const feed = props.posts.map((post, idx) => (
      <div key={idx}>
      {/* <td><span className="badge">{idx}</span></td> */}
      <p>{post.whoPosted}&nbsp;<em>says</em>&nbsp;Date:{post.datePosted}&nbsp;{post.location}</p>
      <p>{post.imgURL}</p>
      <h6>{post.textPost}</h6>
    </div>
    ));
    return (
      <div className={styles.Feed}>
        <h1 className='header-footer'>Feed</h1>
        {props.posts.length ? 
          <div className={`${styles.table} table text-info`}>
           
            <div className='card'>
              {feed}
            </div>
          </div>
          :
          <h4 className='text-info'>No Feed Yet</h4>
        }
        <div>
          <Link className={`${styles.cancel} btn btn-default btn-sm`} to='/'>Back to Feed</Link>
        </div>
      </div>
    );
}