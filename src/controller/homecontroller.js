import connection from "../configs/connectDB";

let gethomePage = (req, res) => {
  //logic
  let listdata = [];
  connection.query(
    'SELECT * FROM `list_of_products`',
    function(err, results, fields){
      results.map((row) =>{
        listdata.push({
          IdPizza: row.IdPizza,
          TenPizza: row.TenPizza,
          ImgPizza: row.ImgPizza,
          ImgToppingPizza: row.ImgToppingPizza,
          SoLuongPizza: row.SoLuongPizza,
          GiaTien: row.GiaTien,
        })
       
      })
      return res.render("home.ejs", { listPizza: listdata });
    })
};

module.exports = {
  gethomePage,
};
