const path = require('path')  //inbuit module of nodejs
// console.log(path);

//!Getting file from a path
// console.log(path.basename("/Path Module/app.js"));

//!Getting directory name from a path
// console.log(path.dirname("Path Module/app.js"));

//!Getting file extension from a path
// console.log(path.extname("/Path Module/app.js"));

//!Getting the absolute path of a file
// console.log(path.resolve("app.js"));

//!Getting special path property
// console.log(__dirname);
// console.log(__filename);
console.log(path.isAbsolute("/Path Module/app.js"));
console.log(path.isAbsolute('app.js'));







