const { execSync } = require("child_process");
const { writeFileSync, copyFileSync } = require("fs");
const pkg = require("./package.json");

const addVersion = (version = "") => {
  return version
    .split(".")
    .reverse()
    .map((e, i) => (!i ? Number(e) + 1 : Number(e)))
    .reverse()
    .join(".");
};

console.log("start build " + new Date().toLocaleString());

execSync("rm -rf build", { stdio: "inherit" });

console.log("[√] delete build dir");

execSync("yarn pkg:build", { stdio: "inherit" });

console.log("[√] build success");

const newVersion = addVersion(pkg.version);

const info = {
  name: pkg.name,
  version: newVersion,
  type: pkg.type,
  private: false,
  description: pkg.description,
  main: "./index.js",
  typings: "./index.d.ts",
  keywords: pkg.keywords,
  repository: pkg.repository,
  author: pkg.author,
  license: pkg.license,
  dependencies: pkg.dependencies,
};

writeFileSync("./build/package.json", JSON.stringify(info, null, 2), "utf-8");
writeFileSync(
  "./package.json",
  JSON.stringify({ ...pkg, version: newVersion }, null, 2),
  "utf-8",
);

console.log("[√] rewrite ckage.json");

copyFileSync("./Readme.md", "./build/Readme.md");

console.log("[√] copy Readme.md");

execSync("cd ./build && sudo npm publish -f", { stdio: "inherit" });

console.log("[√] publish success");

console.log(`npm site： https://www.npmjs.com/package/${pkg.name}`);
