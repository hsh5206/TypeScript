{
  /**
   * Omit : 기존의 타입에서 원하는 것만 제외해서 사용 가능
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

  function getVideoMetadata(id: string): Omit<Video, "url" | "data"> {
    return {
      id,
      title: "title",
    };
  }
}
