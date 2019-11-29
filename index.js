const inquirer = require("inquirer");
const fse = require("fs-extra");
const path = require("path");
const prettier = require("prettier");
const cwdpath = process.cwd();
const spawn = require("cross-spawn");

function megePkg(rootPath, basePkg, pkgFile) {
  const pkg = fse.readJSONSync(pkgFile, { encoding: "utf-8" });
  if (pkg.dependencies) {
    basePkg.dependencies = {
      ...basePkg.dependencies,
      ...pkg.dependencies
    };
  }

  if (pkg.devDependencies) {
    basePkg.devDependencies = {
      ...basePkg.devDependencies,
      ...pkg.devDependencies
    };
  }

  const formatBasePkg = prettier.format(JSON.stringify(basePkg), {
    parser: "json"
  });

  fse.writeFileSync(path.join(rootPath, "package.json"), formatBasePkg, {
    encoding: "utf-8"
  });

  return basePkg;
}

inquirer
  .prompt([
    {
      type: "input",
      message: "app name?",
      name: "appName",
      default: "react-app"
    },
    {
      type: "confirm",
      message: "use react-router?",
      name: "useReactRouter",
      default: false
    },
    {
      type: "list",
      message: "state manager?",
      name: "stateManager",
      choices: ["none", "mobx", "redux"],
      default: "mobx"
    },
    {
      type: "list",
      message: "package manager?",
      name: "packageManager",
      choices: ["npm", "yarn"],
      default: "npm"
    }
  ])
  .then(answers => {
    const rootPath = path.join(cwdpath, answers.appName);
    fse.mkdirSync(rootPath);

    fse.copySync(path.join(__dirname, "src/base"), rootPath);
    let basePkg = fse.readJSONSync(
      path.join(__dirname, "src/base/package.json"),
      { encoding: "utf-8" }
    );
    if (answers.useReactRouter) {
      fse.copySync(
        path.join(__dirname, "src/router/src"),
        path.join(rootPath, "src")
      );

      basePkg = megePkg(
        rootPath,
        basePkg,
        path.join(__dirname, "src/router/package.json")
      );
    }

    if (answers.stateManager !== "none") {
      if (answers.stateManager === "mobx") {
        basePkg = megePkg(
          rootPath,
          basePkg,
          path.join(__dirname, "src/mobx/package.json")
        );
      }

      if (answers.stateManager === "redux") {
        fse.copySync(
          path.join(__dirname, "src/redux/src"),
          path.join(rootPath, "src")
        );
        basePkg = megePkg(
          rootPath,
          basePkg,
          path.join(__dirname, "src/redux/package.json")
        );
      }
    }

    console.log("build in " + rootPath);

    spawn.sync(answers.packageManager === "npm" ? "npm install" : "yarn", {
      cwd: rootPath,
      stdio: "inherit"
    });
  });
