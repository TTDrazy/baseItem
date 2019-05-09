import express from "express";
const app = express();
var db = require("./config/db");

/*允许跨域访问 */
app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

//查询所有数据
app.get('/', (req, res) => {
    db.query("select * from teacherinfo",function(err,rows){
        res.send(rows);
    });
})
//删除一条数据
app.get('/delete',(req,res) => {
    let {id} = req.query;
    db.query(`delete from teacherinfo where id = ${id}`,function(err,rows){
        if(err){
            res.end('删除失败！'+err);
        }else{
            res.send('删除成功!');
            res.end();
        } 
    });
})
//新增一条数据
app.post('/add',(req,res) => {
    let params = req.query;
    let {id,name,sex} = params;
    db.query(`insert into teacherinfo(id,name,sex) values (${id},"${name}","${sex}")`,function(err,rows){
        if (err) {
            res.end('新增失败：' + err);
        } else {
            res.send('新增成功!');
            res.end();
        }
    })
})
//修改一条数据
app.put('/update',(req,res) => {
    let params = req.query;
    let {id,name,sex} = params;
    db.query("update teacherinfo set name='" + name + "',sex='" + sex + "' where id=" + id,function(err,rows){
        if(err){
            res.end('修改失败：'+err);
        }else{
            res.send('修改成功!');
            res.end();
        }
    })
})

app.listen(4000, () => console.log("Example app listening on port 4000!"));

