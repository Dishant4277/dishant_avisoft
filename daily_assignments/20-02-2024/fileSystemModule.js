import fs from "fs";

const __dirname = "./";
export function listFiles(__dirname) {
  fs.readdir(__dirname, (err, files) => {
    if (err) {
      console.log("Unable to scan directory");
      return;
    }
    files.forEach((file) => {
      console.log(file.toString());
    });
  });
}

export function makeDir(dir) {
  fs.mkdir(dir, { recursive: true }, (err) => {
    if (err) {
      console.log(`Unable to make ${dir} directory`);
    } else {
      console.log(`${dir} directory added to current working directory.`);
    }
  });
}

export function readFile(fileName) {
  fs.readFile(fileName, "utf-8", (err, data) => {
    if (err) {
      console.log(`Unable to read the ${fileName} file.`);
    } else {
      console.log(`File Data: ${data}`);
    }
  });
}

export function writeFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(`Unable to write Data to ${fileName} file.`);
    } else {
      console.log(`Data has been written to ${fileName} file.`);
    }
  });
}
