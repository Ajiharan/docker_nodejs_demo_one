import connection from "../database/DBConnection.js";

export const updateProduct = (id, productName, price, count) => {
  try {
    const query = `update products set name='${productName}', price=${price}, count=${count}  where id=${id}`;
    return new Promise((resolve, reject) => {
      connection.query(query, (error, results, fields) => {
        if (error) {
          reject({ isReject: true, reason: error });
        }
        console.log("results", results);
        if (results?.affectedRows === 0) {
          reject({ status: 400, reason: "no data found" });
        }
        resolve("sucessfully updated");
      });
    });
  } catch (err) {
    return Promise.reject({ reason: err });
  }
};
