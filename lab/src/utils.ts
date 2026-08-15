import fs from "node:fs";
import { fileURLToPath } from "node:url";
import { load, type CheerioAPI } from "cheerio";

export async function fetchContent(path: string): Promise<CheerioAPI> {
  const url = new URL(`../dist/${path}/index.html`, import.meta.url);
  const content = await fs.promises.readFile(fileURLToPath(url), "utf8");

  return load(content);
}
