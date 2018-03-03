import { execSync } from "child_process"
import * as path from "path"
import { findNearestNodemodules } from "../../../utils/npm-finder"

const env = "prod"

// Run webpack
execSync([
  `${findNearestNodemodules()}/.bin/webpack`,
  `--progress`,
  `--mode production`,
  `--config ${path.join(__dirname, "../../../utils/webpack-config.js")}`,
  `--env.projectRootPath ${__dirname}`,
  `--env.env ${env}`,
  `--env.publicPath /bundle/`,
  `--env.entryPath ${path.join(__dirname, "client/index.js")}`,
  `--env.outDir ${path.join(__dirname, "../../../bundle")}`,
  `--env.fileName main`
].join(" "), {
    stdio: "inherit"
  })
