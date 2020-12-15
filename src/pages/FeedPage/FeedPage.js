import { Link } from 'react-router-dom';
import styles from './FeedPage.module.css';



export default function FeedPage (props) {
  
    const feed = props.posts.map((post, idx) => (
      <div key={idx}>
      <p>{post.whoPosted}&nbsp;<em>says:</em></p>
      <p>{post.imgURL}</p>
      <h6>{post.textPost}</h6>
      <p>Date:{post.datePosted}&nbsp;{post.location}</p>
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
      </div>
    );
}