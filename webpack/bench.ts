import { Bench } from "tinybench";
import { exec } from "child_process";
import { promisify } from "util";

(async () => {
  const bench = new Bench({ time: 10000 });
  const spawnAsync = promisify(exec);
  bench.add("webpack", async () => {
    console.log("start");
    await spawnAsync("yarn build:webpack");
    console.log("hi");
  });

  await bench.warmup(); // make results more reliable, ref: https://github.com/tinylibs/tinybench/pull/50
  await bench.run();
  console.table(bench.table());
})();
