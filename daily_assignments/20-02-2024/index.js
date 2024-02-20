import { listFiles, makeDir, readFile, writeFile } from "./fileSystemModule.js";
import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(
  "1 - List Files \n2 - Create New Directory\n3 - Read File's Data\n4 - Write Data to a File\n"
);

rl.question("Enter your choice: ", (choice) => {
  switch (choice) {
    case "1":
      rl.question("Enter path of the directory: ", (path) => {
        console.log("Files in this directory: \n" + listFiles(path));
        rl.close();
      });
      break;

    case "2":
      rl.question("Enter Name of new directory: ", (dir) => {
        makeDir(dir);
        rl.close();
      });
      break;

    case "3":
      rl.question("Enter Name of the File: ", (fileName) => {
        readFile(fileName);
        rl.close();
      });
      break;

    case "4":
      rl.question("Enter Name of file: ", (fileName) => {
        rl.question(
          "Enter Data you want to write into " + fileName + " file:",
          (data) => {
            writeFile(fileName, data);
            rl.close();
          }
        );
      });
      break;

    default:
      console.log("You have entered a wrong choice!!!!");
      rl.close();
      break;
  }
});
