const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();



    // Load your site
    await page.goto('https://snissn.github.io/back-goes-backwards/medical-foundation/02.html', { waitUntil: 'networkidle2' });

    // Wait for MathJax to finish rendering
    await page.evaluate(() => MathJax.typesetPromise());



await page.pdf({
    path: 'output.pdf',
    width: '8.5in',  // Custom width
    height: '11in',  // Custom height
    margin: {
        top: '1in',
        bottom: '1in',
        left: '1in',
        right: '1in',
    },
    printBackground: true,
});


    await browser.close();
})();

