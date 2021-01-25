const globby = require("globby");
const prettier = require("prettier");

const now = new Date().toISOString().substring(0, 10);

const domain = "https://possouscire.casa";

const formatted = (sitemap) => prettier.format(sitemap, { parser: "html" });

(async () => {
  const pages = await globby([
    // include
    "./out/**/*.html",
    // exclude
    "!./out/404/**",
    "!./out/_next/**",
  ]);

  const pagesSitemap = pages
    .map((it) => it.replace(/^\.\/out(.+)index\.html/, "$1"))
    .map(
      (it) =>
        `<url>
              <loc>${domain}${it}</loc>
              <lastmod>${now}</lastmod>
        </url>`
    )
    .join("\n");

  const generatedSitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pagesSitemap}
    </urlset>
  `;

  console.log(formatted(generatedSitemap));
})();
