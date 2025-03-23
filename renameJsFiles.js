const fs = require("fs");
const path = require("path");

const directory = path.join(__dirname, "src/routes");

function renameJsFiles(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      renameJsFiles(fullPath); // Recursively handle subdirectories
    } else if (path.extname(fullPath) === ".js") {
      const newPath = fullPath.replace(/\.js$/, ".jsx");
      fs.renameSync(fullPath, newPath);
      console.log(`Renamed: ${fullPath} -> ${newPath}`);
    }
  });
}

renameJsFiles(directory);
console.log("✅ Renaming completed!");
