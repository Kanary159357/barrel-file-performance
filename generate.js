const fs = require("fs");
const path = require("path");

const DEPTH = 5;


function generateComponentFiles(directory, currentDepth) {
  const depth = currentDepth.length
if(depth > DEPTH) return;

  for (let i = 1; i <= 5; i++) {
    const componentName = String.fromCharCode(64 + i);
    const componentFileName = `${componentName}${currentDepth.join("")}.tsx`;
    const componentFilePath = path.join(directory, componentFileName);

    // Create component file
    fs.writeFileSync(
      componentFilePath,
      `import React from 'react';
    
    const ${componentName}= () => {
      return <div>${componentName} Component</div>;
    };
    
    export default ${componentName};
    `
    );
  }

  // generate barrel index file
    const barrelIndexFilePath = path.join(directory, "index.ts");
    let barrelIndexFileContent = fs.readdirSync(directory).reduce((content, fileName) => {
        if(fileName === "index.ts") return "";
        const componentName = fileName.split(".")[0];
        return `${content}export { default as ${componentName} } from './${componentName}';\n`;
    }, "");

    if(depth < DEPTH) {
      for(let i = 1; i<=5; i++){
        barrelIndexFileContent += `export * from './${i}';\n`;
      }
    }



    fs.writeFileSync(barrelIndexFilePath, barrelIndexFileContent);


  if(depth>DEPTH-1) return;
  // Create subdirectories
  for(let i = 1; i<=5; i++){
    const subdirectoryName = i;
    const subdirectoryPath = path.join(directory, `${subdirectoryName}`);
    console.log(subdirectoryPath)
    fs.mkdirSync(subdirectoryPath);
    console.log(`Created ${subdirectoryPath}`);
    generateComponentFiles(subdirectoryPath, [...currentDepth, i]);
  }
}
if(!fs.existsSync('./src/component')){
  fs.mkdirSync('./src/component');
}
generateComponentFiles('./src/component', [1]);