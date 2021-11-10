import connection from "../database/DBConnection.js";

export const deleteProduct = (id) => {
  try {
    const query = `delete from products where id=${id}`;
    return new Promise((resolve, reject) => {
      connection.query(query, (error, results, fields) => {
        if (error) {
          reject({ isReject: true, reason: error });
        }

        if (results?.affectedRows === 0) {
          reject({ status: 400, reason: "no data found" });
        }
        resolve("sucessfully deleted");
      });
    });
  } catch (err) {
    return Promise.reject({ reason: err });
  }
};
