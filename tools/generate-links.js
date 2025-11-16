const fs = require('fs');
const path = require('path');

// 读取 category.json 文件
const filePath = path.join(__dirname, '../data', 'category.json');
const fileContents = fs.readFileSync(filePath, 'utf8');
const categories = JSON.parse(fileContents);

// 提取并生成链接
const links = [];
for (const groupSlug in categories) {
    if (categories.hasOwnProperty(groupSlug)) {
        const children = categories[groupSlug].children;
        children.forEach(child => {
            links.push(`/category/${child.slug}`);
        });
    }
}

// 打印所有链接
links.forEach(link => {
    console.log(link);
});

// 你也可以将链接保存到文件中，方便后续使用
fs.writeFileSync(path.join(__dirname, 'category-links.txt'), links.join('\n'));
// console.log(`\nSuccessfully generated ${links.length} links to category-links.txt`);