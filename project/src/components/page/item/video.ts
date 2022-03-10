import { BaseComponent } from "./../../component.js";
export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<sectin class="video">
            <div class="video__player"><iframe class="video__iframe"></iframe></div>
            <h3 class="video__title"></h3>
          </sectin>`);

    const iframe = this.element.querySelector(
      ".video__iframe"
    )! as HTMLIFrameElement;
    iframe.src = this.convertToEmbeddedURL(url);
    console.log(iframe.src);

    const titleElement = this.element.querySelector(
      ".video__title"
    )! as HTMLHeadElement;
    titleElement.textContent = title;
  }

  private convertToEmbeddedURL(url: string): string {
    const regExp =
      /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9(-|_)]{11}))|(?:youtu.be\/([a-zA-Z0-9(-|_)]{11})))/;
    const match = url.match(regExp);
    console.log(match);
    const videoId = match ? match[1] || match[2] : undefined;

    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  }
}

// <iframe
//   width="575"
//   height="480"
//   src="https://www.youtube.com/embed/PLdfp7JDlpY"
//   title="YouTube video player"
//   frameborder="0"
//   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//   allowfullscreen
// ></iframe>;
