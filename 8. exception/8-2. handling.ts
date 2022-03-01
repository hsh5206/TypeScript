{
  class NetworkClient {
    tryConnect() {
      throw new Error("no network!");
    }
  }

  class UseerService {
    constructor(private client: NetworkClient) {}
    login() {
      this.client.tryConnect();
      // 여기서 처리하는 것 보다는 app에서
    }
  }

  class App {
    constructor(private userService: UseerService) {}
    run() {
      try {
        this.userService.login();
      } catch (error) {
        // show dialog to user
        // app입장에서 조금 더 의미있는 에러처리 가능
      }
    }
  }

  const client = new NetworkClient();
  const service = new UseerService(client);
  const app = new App(service);
  app.run();
}
