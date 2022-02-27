# SETUP JSON  SERVER 🤩

- npm i -g json-server
- npm init
- git init
- touch .gitignore => gg search: gitignore generate (https://www.toptal.com/developers/gitignore) + enter: node
- npm i json-server (de chay trong moi truong dev)
- npm i --save-dev nodemon
- touch main.js => go to: https://github.com/typicode/json-server -> Module(để custom 1 số thứ) + Custom routes example
- package.json thêm vào 2 câu:
    ```
    "dev": "nodemon main.js",
    "start": "node main.js" 
    ```
- npm run dev => curl http://localhost:3000/product/1 hoac run tren web.

---
- cài extension: Rest client - để test trực tiếp API ngay trong client
- tạo file .http => tạo câu lệnh GET/POST/DELETE/PATCH(update 1 phần)/PUT(update toàn phần) -> Send Request

---
- touch generate-data.js => create random data for categoryList and productList push db.json
- thay doi trong file package.json 2 dong nay: 
    ```
    {
        "start": "npm run generate-data && node main.js",
        "generate-data": "node generate-data.js"
    }
    ```

---
- Filter in folder api-collection: q là toàn bộ , (title)_like là 1 phần mà có trong title

---
- POST => có thêm createAt và UpdateedAt trong file main.js (làm theo Module-Custom routes example)
- PATCH => có thêm updatedAt
- cấu hình thêm file .prettierrc (vào trang Prettier -> Playground)

---
- Custom db.json khi phân trang để biết các thông tin như tổng số trang, đang trang nào (gọi là "Endpoint listing"):
- npm i query-string : để parse từ string sang object

---
Deploy Heruku:
- fix lỗi deploy: packagelog.json sửa "casual" trong "devDependencies" lên "dependencies":
    ```
    npm uninstall casual (xóa ở devDependencies)
    npm i casual (thêm vào dependencies)
    ```
- lỗi port: search "heroku port env" thêm vào main.js:
    ```
    const PORT = process.env.PORT || 3000;
    ```

### ❤️❤️❤️ Happy Coding! ❤️❤️❤️
