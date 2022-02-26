npm i -g json-server
npm init
git init
touch .gitignore => gg search: gitignore generate (https://www.toptal.com/developers/gitignore) + enter: node
npm i json-server (de chay trong moi truong dev)
npm i --save-dev nodemon
touch main.js => go to: https://github.com/typicode/json-server -> Module(để custom 1 số thứ) + Custom routes example
package.json thêm vào 2 câu:
"dev": "nodemon main.js",
"start": "node main.js"
npm run dev => curl http://localhost:3000/product/1 hoac run tren web.
---
cài extension: Rest client - để test trực tiếp API ngay trong client
tạo file .http => tạo câu lệnh GET/POST/DELETE/PATCH/PUT -> Send Request