import fs from "node:fs";
import { fileURLToPath } from "node:url";
import { load } from "cheerio";

/**
 * @param {string} path
 *
 * @returns {Promise<import("cheerio").CheerioAPI>}
 */
export async function fetchContent(path) {
  const url = new URL(`../dist/${path}/index.html`, import.meta.url);
  const content = await fs.promises.readFile(fileURLToPath(url), "utf8");

  return load(content);
}
