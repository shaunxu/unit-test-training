import _ from "lodash";
import * as fs from "fs";
import * as path from "path";
import Mocha from "mocha";

const argv = require("minimist")(process.argv.slice(2));
const specs: string[] | undefined = _.isArray(argv.s) ? argv.s : (_.isString(argv.s) ? [argv.s] : undefined);
const testDir = argv.dir || "./test";
const mocha = new Mocha({
    timeout: 999999,
    fullStackTrace: true
});

const files = fs.readdirSync(testDir);
for (const file of files) {
    if (file.endsWith(".spec.ts")) {
        const specName = path.basename(file, path.extname(file));
        if (!specs || _.some(specs, x => x.toLowerCase() === specName.toLowerCase())) {
            mocha.addFile(`${testDir}/${file}`);
        }
    }
}

mocha.run(failures => {
    process.exitCode = failures ? -1 : 0;
});