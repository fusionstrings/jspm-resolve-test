import jspmResolve from '@jspm/resolve';

async function testJS() {
    const { resolved, format } = await jspmResolve(
        './module.js',
        process.cwd()
    );
    console.log(resolved, format);
}

testJS();

async function testModuleJS() {
    const { resolved, format } = await jspmResolve(
        './module.mjs',
        process.cwd()
    );
    console.log(resolved, format);
}

testModuleJS();

async function testMissingJS() {
    const { resolved, format } = await jspmResolve(
        './missing/module.mjs',
        process.cwd()
    );
    console.log(resolved, format);
}

testMissingJS();
