import React, { memo } from 'react';
import styles from './video_item.module.css';

const VideoItem = memo(
  ({ video, video: { snippet }, onVideoClick, display }) => {
    const displayType = display ==='list'? styles.list : styles.grid;
  
    return(
    <li className={`${styles.container} ${displayType}`} onClick={()=> onVideoClick(video)}>
      <div className={styles.video}>
        <img
          className={styles.thumbnail}
          src={snippet.thumbnails.medium.url}
          alt="video thumbnail"
        />
        <div className={styles.metadata}>
          <p className={styles.title}>{snippet.title}</p>
          <p className={styles.channel}>{snippet.channelTitle}</p>
        </div>
      </div>
    </li>
    )
  }
); //prop이 바뀌지 않고 업데이트가 될 필요가 없기때문에 memo사용

export default VideoItem;
