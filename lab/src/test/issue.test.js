import { suite } from "uvu";
import * as assert from "uvu/assert";
import { fetchContent } from "../utils.mjs";

const issue = suite("issue");

issue("issue-175", async () => {
  const $ = await fetchContent("issues/issue-175");

  const $ul = $("ul");
  const $li = $ul.find("li");
  const $el = $li.find("div[data-block='standfirst']");

  assert.is($ul.length, 1);
  assert.is($li.length, 1);
  assert.is($el.length, 1);
});

issue.run();
