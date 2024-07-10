import { Bench } from "tinybench";
import { exec } from "child_process";
import { promisify } from "util";

(async () => {
  const bench = new Bench({ iterations: 5 });
  const spawnAsync = promisify(exec);
  bench
    .add("webpack non-barrel", async () => {
      await spawnAsync("yarn build:webpack:non-barrel");
    })
    .add("webpack barrel", async () => {
      await spawnAsync("yarn build:webpack:barrel");
    })
    .add("webpack-swc non-barrel", async () => {
      await spawnAsync("yarn build:webpack:swc:non-barrel");
    })
    .add("webpack-swc barrel", async () => {
      await spawnAsync("yarn build:webpack:swc:barrel");
    });
  // .add("vite barrel", async () => {
  //   await spawnAsync("yarn vite build --config vite.config.barrel.ts");
  // })
  // .add("vite non-barrel", async () => {
  //   await spawnAsync("yarn vite build --config vite.config.non-barrel.ts");
  // })
  // .add("vite swc barrel", async () => {
  //   await spawnAsync("yarn vite build --config vite.config.swc.barrel.ts");
  // })
  // .add("vite swc non-barrel", async () => {
  //   await spawnAsync(
  //     "yarn vite build --config vite.config.swc.non-barrel.ts"
  //   );
  // })
  // .add("jest barrel", async () => {
  //   await spawnAsync("yarn jest A11111.barrel.test.tsx");
  // })
  // .add("jest non-barrel", async () => {
  //   await spawnAsync("yarn jest A11111.non-barrel.test.tsx");
  // })
  // .add("tsc non-barrel", async () => {
  //   try {
  //     await spawnAsync("yarn typecheck:non-barrel");
  //   } catch {}
  // })
  // .add("tsc barrel", async () => {
  //   try {
  //     await spawnAsync("yarn typecheck:barrel");
  //   } catch {}
  // });

  await bench.warmup(); // make results more reliable, ref: https://github.com/tinylibs/tinybench/pull/50
  await bench.run();
  console.table(bench.table());
})();
