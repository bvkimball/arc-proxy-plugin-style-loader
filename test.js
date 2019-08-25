let test = require("tape");
let plugin = require(".");

test("env", t => {
  t.plan(1);
  t.ok(plugin, "plugin");
});

let src = `
body {
  height: 100%;
  width: 100vw;
  color: red;
}
`;
test("render", t => {
  t.plan(1);
  let result = plugin("foo.css", {
    headers: {},
    body: src
  });
  t.ok(result, "got result");
  console.log(result);
});
