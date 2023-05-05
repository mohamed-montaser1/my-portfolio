import fs from "fs";
import { argv } from "process";
const component = argv[2];

async function createComponent(componentName) {
  let tsDir = `E:\\projects\\my-modern-portfolio\\src\\components\\${componentName}`;
  let scssDir = `E:\\projects\\my-modern-portfolio\\src\\scss\\${componentName}`;
  let txt = `
function ${componentName}() {
  return (
    <>
      <h1>${componentName}</h1>
    </>
  );
}

export default ${componentName};
  `;
  if (fs.existsSync(tsDir)) {
    console.error("this file is already exists");
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
