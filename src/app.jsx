import React, { useCallback, useEffect, useState } from "react";
import styles from "./app.module.css";
import SearchHeader from "./components/search_header/search_header";
import VideoDetail from "./components/video_detail/video_detail";
import VideoList from "./components/video_list/video_list";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };
  const search =useCallback(
    (query) => {
      youtube
        .search(query) //
        .then((videos) => setVideos(videos));
    },[youtube]);
    //useCallback은 한번만들면 메모리에 보관하기때문에 메모리에 보관하게된다. 내가 써야할때만 써야한다.
    // 1.자식컴포넌트에 props에 전달할때 계속 새로운콜백을 전달하면 자식컴포넌트가 re-render될때만 usecallback을사용
    //사용하지않아도될때는 :: 자식 컴포넌트가아니라 jsx를 이용한 div 태그라던지 button과 같은 이벤트를 처지하는 콜백으로 전달할때는 사실 새로운게전달해도 re-render가 발생되지 않으니까 크게 상관은없다. 

  useEffect(() => {
    setSelectedVideo(null);
    youtube
      .mostPopular() //
      .then((videos) => {
        setVideos(videos);
      });
  }, [youtube]);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <section className={styles.content}>        
          {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? "list" : "grid"}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
