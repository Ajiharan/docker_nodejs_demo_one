import connection from "../database/DBConnection.js";

export const retriveProducts = async () => {
  try {
    const query = `select * from products`;
    return new Promise((resolve, reject) => {
      connection.query(query, (error, results, fields) => {
        if (error) {
          reject({ reason: error });
        }
        resolve({ data: results });
      });
    });
  } catch (err) {
    return Promise.reject({ reason: err });
  }
};
