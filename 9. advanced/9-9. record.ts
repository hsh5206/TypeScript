{
  /**
   * record 키 : 값 쌍으로 타입을 이용할 때 사용
   */
  type Page = "home" | "about" | "contact";
  type PageInfo = {
    title: string;
  };

  const nav: Record<Page, PageInfo> = {
    home: { title: "home" },
    about: { title: "about" },
    contact: { title: "none" },
  };
  console.log(nav);
}
