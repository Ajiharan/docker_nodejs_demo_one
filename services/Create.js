import connection from "../database/DBConnection.js";

export const createProduct = async (productName, price, count) => {
  try {
    const query = `INSERT INTO products (name, price, count) VALUES ('${productName}', ${price}, ${count})`;

    return new Promise((resolve, reject) => {
      connection.query(query, (error, results, fields) => {
        if (error) {
          reject({ isReject: true, reason: error });
        }
        resolve("sucessfully inserted");
      });
    });
  } catch (err) {
    console.log(err);
    return Promise.reject({ isReject: true, reason: err });
  }
};
