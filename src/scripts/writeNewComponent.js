import fs from "fs";
import path, { dirname } from "path";
import { argv } from "process";
import { fileURLToPath } from "url";

const component = argv[2];
const __dirname = dirname(fileURLToPath(import.meta.url));

async function createComponent(componentName) {
  const tsDir = path.join(
    __dirname,
    "../",
    "components",
    `${componentName.slice(0, 1).toUpperCase()}${componentName.slice(1)}`
  );
  const tsPage = path.join(
    __dirname,
    "../",
    "pages",
    `${componentName.slice(0, 1).toUpperCase()}${componentName.slice(1)}`
  );
  const scssDir = path.join(__dirname, "../", "scss", `${componentName}`);

  let txt = `
function ${componentName.slice(0, 1).toUpperCase()}${componentName.slice(1)}() {
  return (
    <>
      <h1>${componentName}</h1>
    </>
  );
}

export default ${componentName.slice(0, 1).toUpperCase()}${componentName.slice(
    1
  )};
  `;
  if (fs.existsSync(tsDir) || fs.existsSync(tsPage)) {
    console.error("this component is already exists");
    return;
  }
  fs.mkdir(tsDir, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`create ${componentName}.tsx directory successfully ✅`);
    }
  });
  fs.writeFile(
    `${tsDir}\\${componentName.slice(0, 1).toUpperCase()}${componentName.slice(
      1
    )}.tsx`,
    txt,
    (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`created ${componentName}.tsx successfully ✅`);
        fs.mkdir(scssDir, (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log(
              `create ${componentName}.scss directory successfully ✅`
            );
          }
        });
        fs.writeFile(`${scssDir}\\${componentName}.scss`, "", (err) => {
          if (err) {
            console.error(err);
          } else {
            console.log(`created ${componentName}.scss successfully ✅`);
            let txt = `@use "./${componentName}/${componentName}.scss"; \n`;
            fs.appendFile(
              "E:\\projects\\my-modern-portfolio\\src\\scss\\index.scss",
              txt,
              (err) => {
                if (err) console.error(err);
                else
                  console.log(
                    `imported ${componentName}.scss in index.scss successfully ✅`
                  );
              }
            );
          }
        });
      }
    }
  );
}

createComponent(component);
