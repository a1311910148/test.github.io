const fs = require('fs');
const { argv } = require('process');
const { resolve, join, parse, extname } = require('path');
const path = require('path');
const URL = require('url');


// console.log(parse('main/cpn/header.vue'));
// console.log(resolve(__dirname, './src', parse('main/cpn/header.vue').dir))
// process.exit(1)
// 获取命令参数
const fileNames = argv.slice(2)
const creatPath = argv.slice(2)[0]
const creatfileNames = argv.slice(2).slice(1)
console.log(creatPath, creatfileNames);



// 读取模板
let vueTem = fs.readFileSync('./tem.vue', 'utf-8')


function createVue(path, fileName) {
    console.log('=>>>' + fs.existsSync(resolve(__dirname, creatPath, parse(fileName).dir)));
    // vue模板
    const repliceStr = parse(fileName).base
    const content = vueTem.replace('$0', repliceStr)
    // 是否生成文件
    const isCreate = parse(fileName).ext
    // 判断目录是否存在
    if (!fs.existsSync(resolve(__dirname, creatPath, isCreate ? parse(fileName).dir : join(parse(fileName).dir, parse(fileName).base)))) {
        mkdirsSync(resolve(__dirname, creatPath, isCreate ? parse(fileName).dir : join(parse(fileName).dir, parse(fileName).base)))
    }
    // 生成文件
    if (extname(fileName)) {
        fs.writeFileSync(path + `/${fileName}`, content)
    }
}

function mkdirsSync(dirname) {
    if (fs.existsSync(dirname)) {
        return true;
    } else {
        if (mkdirsSync(path.dirname(dirname))) {
            fs.mkdirSync(dirname);
            return true;
        }
    }
}

creatfileNames.forEach(el => createVue(creatPath, el))

