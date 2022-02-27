const casual = require("casual");
const fs = require("fs");

// CASUAL
// Create a list of categories
casual.define("category", function () {
  return {
    id: casual.uuid,
    name: casual.title    
  };
});

console.log(casual.category);

// Create a list of products
casual.define("product", function (id) {
  return {
    categoryId: id,
    id: casual.uuid,
    name: casual.category.name,
    price: casual.integer(1, 100),
    color: casual.color_name,
    description: casual.description,
    image: casual.url    
  };
});

// FUNCTION RANDOM

const randomCategoryList = (n) => {
  if (n <= 0) return [];

  const categoryList = [];

  // loop and push category
  Array.from(new Array(n)).forEach(() => {
    const category = casual.category;

    categoryList.push(category);
  });

  return categoryList;
};

const randomProductList = (categoryList, numberOfProducts) => {
  if (numberOfProducts <= 0) return [];

  const productList = [];

  // loop and push product
  for (const category of categoryList) {
    Array.from(new Array(numberOfProducts)).forEach(() => {
      // casual.product = {
      //   categoryId: category.id,
      // };
      const product = casual.product(category.id);
      productList.push(product);
    });
  }

  return productList;
};

// IFFE
(() => {
  //random data
  const categoryList = randomCategoryList(3);
  const productList = randomProductList(categoryList, 4);

  //prepare object with random data
  const db = {
    categories: categoryList,
    products: productList,
  };

  //write random data to db.json
  fs.writeFile("db.json", JSON.stringify(db), () => {
    console.log("Generate data success");
  });
})();
