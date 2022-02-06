import React, { useEffect,useState } from 'react';
import "./app.css";
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);  

  useEffect(()=>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    
    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyABaWZIfeIXplHfSj9o3-aez7LFxmLTybI", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items)) //컴포넌트 데이트를 어벧이트 해준다.
      .catch(error => console.log('error', error));

    console.log('useEffect');
  }, []); 
  return <VideoList videos={videos} />
}

export default App;
