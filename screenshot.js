const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

// Student website data
const students = [
  { name: "Team 1", url: "https://final-project-starter-repo.vercel.app/" },
  { name: "Team 2", url: "https://weatherdashboard-pied.vercel.app/" },
  { name: "Team 3", url: "https://final-project-starter-repo-gray.vercel.app/report.html" },
  { name: "Team 4", url: "https://final-project-67336.vercel.app/" },
  { name: "Team 5", url: "https://336-final-project.vercel.app/" },
];

// Directory to save screenshots
const screenshotDir = path.join(__dirname, "images");

// Ensure the directory exists
if (!fs.existsSync(screenshotDir)) {
  fs.mkdirSync(screenshotDir);
}

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Set viewport to a 16:9 ratio (e.g., 1280x720)
  const width = 1280;
  const height = 720;
  await page.setViewport({ width, height });

  for (const student of students) {
    try {
      console.log(`Capturing: ${student.name} - ${student.url}`);
      await page.goto(student.url, { waitUntil: "load", timeout: 60000 });

      const filePath = path.join(
        screenshotDir,
        `${student.name.replace(/\s+/g, "_")}.png`
      );

      // Take a screenshot with the defined viewport
      await page.screenshot({ path: filePath, fullPage: false });
      console.log(`Saved: ${filePath}`);
    } catch (error) {
      console.error(`Failed to capture ${student.name}:`, error);
    }
  }

  await browser.close();
})();
