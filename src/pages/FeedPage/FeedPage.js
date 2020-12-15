import styles from './FeedPage.module.css';



export default function FeedPage (props) {
  
    const feed = props.posts.map((post, idx) => (
      <div className={`${styles.cardIndex}`} key={idx}>
      <p>&nbsp;{post.whoPosted}&nbsp;<em>says:</em>&nbsp;</p>
      {/* <p>&nbsp;{post.imgURL}</p> */}
      <h6>&nbsp;{post.textPost}&nbsp;</h6>
      <p>&nbsp;Date:{post.datePosted}<br/>{post.location}&nbsp;</p>
    </div>
    ));
    return (
      <div className={styles.Feed}>
        <h1 className='header-footer'>Feed</h1>
        {props.posts.length ? 
          <div className={`${styles.table}`}>
           
            <div className={`${styles.card}`}>
              {feed}
            </div>
          </div>
          :
          <h4 className='text-info'>No Feed Yet</h4>
        }
      </div>
    );
}