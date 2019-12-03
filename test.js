import jspmResolve from "@jspm/resolve";

async function testJS() {
  const { resolved, format } = await jspmResolve("./module.js", process.cwd());
  console.log(resolved, format);
}

//testJS();

async function testModuleJS() {
  try {
    const { resolved, format } = await jspmResolve(
      "./module.mjs",
      process.cwd()
    );
    console.log(resolved, format);
  } catch (error) {
    console.error(error)
  }
}

testModuleJS();

async function testMissingJS() {
  const { resolved, format } = await jspmResolve(
    "./missing/module.mjs",
    process.cwd()
  );
  console.log(resolved, format);
}

//testMissingJS();
