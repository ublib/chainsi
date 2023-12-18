import path from "node:path";
import { execSync } from "node:child_process";
import { rimraf } from "rimraf";
import { build } from "esbuild";
import { bundle } from "dts-bundle";
import { t } from "./src";

const finishedBuild = (dir: string) => console.log(`${t("✔︎").green._} build: ${t(dir).black._}`);

export const buildChainsi = async () => {
  execSync("tsc -p tsconfig.build.json");
  const res = await build({
    entryPoints: [path.resolve(`src/index`)],
    bundle: true,
    minify: true,
    target: "es2018",
    outdir: `dist`,
    format: "esm",
    plugins: [
      {
        name: "TypeScriptDeclarationsPlugin",
        setup(build) {
          build.onEnd(() => {
            bundle({
              name: `chainsi`,
              main: `temp/src/index.d.ts`,
              out: path.resolve(`dist/index.d.ts`),
            });
          });
        },
      },
    ],
  });
  execSync("rm -rf temp");
  finishedBuild(`dist`);
  return res;
};

export const clearChainsiSync = () => [rimraf("dist")];

await (async function main() {
  console.log("clear dist...");
  await Promise.allSettled([...clearChainsiSync()]);
  console.log(`${t("✔︎").green._} finished clearing dist`);

  console.log("building chainsi...");
  const buildingChainsi = buildChainsi();
  await Promise.all([buildingChainsi]);
})();
