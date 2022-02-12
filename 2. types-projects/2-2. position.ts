{
  /**
   * 좌표 객체 변환
   */
  type commandString = "up" | "down" | "left" | "right";
  function move(command: commandString) {
    switch (command) {
      case "up":
        position.y += 1;
        break;
      case "down":
        position.y -= 1;
        break;
      case "left":
        position.x -= 1;
        break;
      case "right":
        position.x += 1;
        break;
      default:
        throw new Error("unknown command");
    }
  }
  type positionNumber = {
    x: number;
    y: number;
  };
  let position: positionNumber = {
    x: 0,
    y: 0,
  };
  console.log(position); // { x: 0, y: 0}
  move("up");
  console.log(position); // { x: 0, y: 1}
  move("down");
  console.log(position); // { x: 0, y: 0}
  move("left");
  console.log(position); // { x: -1, y: 0}
  move("right");
  console.log(position); // { x: 0, y: 0}
}
