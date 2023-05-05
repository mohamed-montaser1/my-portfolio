import fs from "fs";
import path, { dirname } from "path";
import { argv } from "process";
import { fileURLToPath } from "url";

const component = argv[2];
const __dirname = dirname(fileURLToPath(import.meta.url));

async function createPage(pageName) {
  const tsDir = path.join(
    __dirname,
    "../",
    "pages",
    `${pageName.slice(0, 1).toUpperCase()}${pageName.slice(1)}`
  );
  const tsComponent = path.join(
    __dirname,
    "../",
    "components",
    `${pageName.slice(0, 1).toUpperCase()}${pageName.slice(1)}`
  );
  const scssDir = path.join(__dirname, "../", "scss", `${pageName}`);

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
  if (fs.existsSync(tsDir) || fs.existsSync(tsComponent)) {
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
