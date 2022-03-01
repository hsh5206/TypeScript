{
  /**
   * Error
   * 1. try
   * 2. catch
   * 3. finally
   */

  function readFile(fileName: string): string {
    if (fileName === "not exist") {
      throw new Error(`file not exist ${fileName}`);
    }
    return "file conntents!";
  }

  function closeFile(fileName: string) {
    // closeFile
  }

  const fileName = "not exist";
  try {
    console.log(readFile(fileName));
  } catch (error) {
    console.log("catched!!!!!!!");
  } finally {
    closeFile(fileName);
    console.log("finally!!!!!!!");
  }
}
