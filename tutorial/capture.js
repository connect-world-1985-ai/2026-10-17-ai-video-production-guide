const fs = require("fs");
const puppeteer = require("puppeteer-core");

(async () => {
  const jobsPath = process.argv[2];
  const htmlPath = process.argv[3];
  const jobs = JSON.parse(fs.readFileSync(jobsPath, "utf8"));
  const browser = await puppeteer.launch({
    executablePath: "/usr/bin/google-chrome-stable",
    headless: "new",
    args: [
      "--no-sandbox",
      "--disable-gpu",
      "--font-render-hinting=none",
      "--force-color-profile=srgb",
      "--hide-scrollbars",
      "--disable-dev-shm-usage",
    ],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 1 });
  page.on("pageerror", (err) => console.error("pageerror", err));
  await page.goto("file://" + htmlPath, { waitUntil: "load" });
  await page.evaluate(() => document.fonts.ready);
  for (const job of jobs) {
    fs.mkdirSync(job.outDir, { recursive: true });
    const n = job.frames;
    for (let i = 0; i < n; i++) {
      const localP = n === 1 ? job.localP ?? 1 : i / (n - 1);
      const globalP = job.g0 + (job.g1 - job.g0) * (n === 1 ? 0 : localP);
      await page.evaluate((id, lp) => window.setTutorialFrame(id, lp, 0), job.slide, localP);
      const name = job.outDir + "/" + String(i).padStart(4, "0") + ".jpg";
      await page.screenshot({ path: name, type: "jpeg", quality: 90 });
      if (i % 40 === 0) console.log(job.slide, i + "/" + n);
    }
    console.log("done", job.slide, n);
  }
  await browser.close();
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
