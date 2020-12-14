import { Link } from 'react-router-dom';
import styles from './FeedPage.module.css';


export default function FeedPage (props) {
  
    const feed = props.posts.map((post, idx) => (
      <tr key={idx}>
      <td><span className="badge">{idx + 1}</span></td>
      <td>{post.whoPosted}</td>
      <td>{post.datePosted}</td>
      <td>{post.location}</td>
      <td>{post.textPost}</td>
    </tr>
    ));
    return (
      <div className={styles.Feed}>
        <header className='header-footer'>Feed</header>
        {props.posts.length ? 
          <table className={`${styles.table} table text-info`}>
            <thead>
              <tr><th width={80}>#</th><th width={100}>Initials</th><th width={100}>Guesses</th><th>Seconds</th></tr>
            </thead>
            <tbody>
              {feed}
            </tbody>
          </table>
          :
          <h4 className='text-info'>No Feed Yet</h4>
        }
        <div>
          <Link className={`${styles.cancel} btn btn-default btn-sm`} to='/'>Back to Feed</Link>
        </div>
      </div>
    );
}