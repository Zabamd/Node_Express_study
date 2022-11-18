const { readFile, writeFile } = require("fs").promises;

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
        return;
      } else {
        resolve(data);
      }
    });
  });
};

const start = async () => {
  try {
    const first = await readFile("./file3.txt", "utf8");
    const second = await readFile("./file2.txt", "utf8");
    const third = await readFile("./file.txt", "utf8");
    await writeFile(
      "./createdFile.csv",
      `Passed data ${first},${second},${third}`
    );
  } catch (error) {
    console.log(error);
  }
};
start();
