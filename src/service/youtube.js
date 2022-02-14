

class Youtube {
    constructor(httpClient) {
      this.youtube = httpClient;
    }
  
    async mostPopular() {
      const response = await this.youtube.get('videos',{
        params:{
          part:'snippet',
          chart:'mostPopular',
          maxResults:25,
        },
      })
        return response.data.items;
      // const response = await fetch(
      //   `/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
      //   this.getRequestOptions
      // );
      // const result = await response.json();
      // return result.items;
    }
  
    async search(query) {

    const response = await this.youtube.get('videos',{
      params:{
        part:'snippet',
        maxResults:25,
        type:'video',
      },
    })
    return response.data.items;
    //   const response = await fetch(
    //     `/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
    //     this.getRequestOptions
    //   );
    //   const result = await response.json();
    //   return result.items.map(item => ({ ...item, id: item.id.videoId }));
    // }
  }
}
  
  export default Youtube;
  