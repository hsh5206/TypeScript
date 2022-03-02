{
  /**
   * Pick : 기존의 타입에서 원하는 것만 골라서 사용 가능
   */
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  function getVideo(id: string): Video {
    return {
      id,
      title: "video",
      url: "https",
      data: "byte-data",
    };
  }

  function getVideoMetadata(id: string): Pick<Video, "id" | "title"> {
    return {
      id,
      title: "title",
    };
  }
}
