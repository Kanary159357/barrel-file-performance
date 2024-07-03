import { Bench } from "tinybench";
import { exec } from "child_process";
import { promisify } from "util";

(async () => {
  const bench = new Bench({ iterations: 5 });
  const spawnAsync = promisify(exec);
  bench
    .add("build non-barrel", async () => {
      await spawnAsync("yarn build:webpack:non-barrel");
    })
    .add("build barrel", async () => {
      await spawnAsync("yarn build:webpack:barrel");
    })
    .add("tsc non-barrel", async () => {
      try {
        await spawnAsync("yarn typecheck:non-barrel");
      } catch {}
    })
    .add("tsc barrel", async () => {
      try {
        await spawnAsync("yarn typecheck:barrel");
      } catch {}
    });

  await bench.warmup(); // make results more reliable, ref: https://github.com/tinylibs/tinybench/pull/50
  await bench.run();
  console.table(bench.table());
})();
