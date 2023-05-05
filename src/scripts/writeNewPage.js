import fs from "fs";
import { argv } from "process";
const component = argv[2];

async function createPage(pageName) {
  let tsDir = `E:\\projects\\my-modern-portfolio\\src\\pages\\${pageName
    .slice(0, 1)
    .toUpperCase()}${pageName.slice(1)}`;
  let scssDir = `E:\\projects\\my-modern-portfolio\\src\\scss\\${pageName
    .slice(0, 1)
    .toUpperCase()}${pageName.slice(1)}`;
  let txt = `
function ${pageName.slice(0, 1).toUpperCase()}${pageName.slice(1)}() {
  return (
    <>
      <h1>${pageName}</h1>
    </>
  );
}

export default ${pageName.slice(0, 1).toUpperCase()}${pageName.slice(1)};
  `;
  if (fs.existsSync(tsDir)) {
    console.error("this file is already exists");
    return;
  }
  fs.mkdir(tsDir, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`create ${pageName}.tsx directory successfully ✅`);
    }
  });
  fs.writeFile(
    `${tsDir}\\${pageName.slice(0, 1).toUpperCase()}${pageName.slice(1)}.tsx`,
    txt,
    (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`created ${pageName}.tsx successfully ✅`);
        fs.mkdir(scssDir, (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log(`create ${pageName}.scss directory successfully ✅`);
          }
        });
        fs.writeFile(`${scssDir}\\${pageName}.scss`, "", (err) => {
          if (err) {
            console.error(err);
          } else {
            console.log(`created ${pageName}.scss successfully ✅`);
            let txt = `@use "./${pageName
              .slice(0, 1)
              .toUpperCase()}${pageName.slice(1)}/${pageName}.scss"; \n`;
            fs.appendFile(
              "E:\\projects\\my-modern-portfolio\\src\\scss\\index.scss",
              txt,
              (err) => {
                if (err) console.error(err);
                else
                  console.log(
                    `imported ${pageName}.scss in index.scss successfully ✅`
                  );
              }
            );
          }
        });
      }
    }
  );
}

createPage(component);
