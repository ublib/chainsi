import path from "node:path";
import * as esbuild from "esbuild";
import { rimraf } from "rimraf";

/** @type {(str: string) => string} */
const blue = str => `\x1b[34m${str}\x1b[0m`;

/** @type {(str: string) => string} */
const green = str => `\x1b[32m${str}\x1b[0m`;

/** @type {(dir: string) => void} */
const finishedBuild = dir => console.log(`${green("✔︎")} build: ${blue(dir)}`);

/**
 * @type {() => PromiseLike<import('esbuild').BuildResult<{ entryPoints: string, outdir: string }>>[]}
 */
export const buildChainsi = async () => {
  /**
   * @type {import('esbuild').BuildOptions}
   */
  const res = await esbuild.build({
    entryPoints: [path.resolve(`src/index`)],
    bundle: true,
    minify: true,
    target: "es2018",
    outdir: `dist`,
    format: "esm",
  });
  finishedBuild(`dist`)
  return res;
}

/**
 * @type {function(): void}
 */
export const clearChainsiSync = () => [rimraf("dist")]

await (async function main() {
  console.log("clear dist...");
  await Promise.allSettled([...clearChainsiSync()]);
  console.log(`${green("✔︎")} finished clearing dist`);
  console.log("building chainsi...");
  const buildingChainsi = buildChainsi();
  await Promise.all([buildingChainsi]);
})();
