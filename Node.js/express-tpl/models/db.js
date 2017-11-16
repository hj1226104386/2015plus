/**
 * @author:huangjin
 * @parameter:
 * @description:
 * @Date:2017/11/15
 */
const mysql = require('mysql')
var pool = mysql.createPool({
  connectionLimit: 10,
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'usertest'
})

// 暴露mysql查询接口
module.exports.query = function (sql, params, callback) {
  pool.getConnection(function (err, connection) {
    // Use the connection
    connection.query(sql, params, function (error, result, fields) {
      if (error) throw error
      // 执行实际操作，错误处理也在函数中处理
      console.log('当前执行的sql语句是：' + sql, ',参数是：' + params)
      callback(result, fields)
      // And done with the connection.
      connection.release()
      // Handle error after the release.
      // Don't use the connection here, it has been returned to the pool.
    })
  })
}