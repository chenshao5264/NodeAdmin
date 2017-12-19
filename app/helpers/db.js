var mssql = require('mssql');  

let nop = function(a,b,c,d,e,f,g) {}

exports.connectSql = function(dbName, callback) {
    console.log("正在连接" + dbName + "数据库")
    mssql.connect("mssql://sa:123@182.61.26.215/" + dbName).then(function() {
        console.log("数据库已连接")
        callback = callback ? callback : nop;
        callback()
    }).catch(function(err) {
        console.log(err)
    });
}

let querySql = function(dbName, sql, callback) {
    new mssql.Request().query(sql).then(function(result) {
        callback = callback ? callback : nop;
        callback(result)
    }).catch(function(err) {
        console.log(err)
    });
}

let selectUser = function(UserID, callback) {
   let sql = 'select GoldCurrency, GameCurrency from dbo.GUser where UserID=\'' + UserID + '\'';
   querySql("Game", sql, callback)
}

// 更新游戏豆
exports.updateGameCurrency = function(UserID, GameCurrency, callback) {
    let sql = 'update dbo.GUser set GameCurrency=' + GameCurrency + "where UserID='" + UserID + "'";
    querySql("Game", sql, callback)
}
// 更新风雷币
exports.updateGoldCurrency = function(UserID, GoldCurrency, callback) {
    let sql = 'update dbo.GUser set GoldCurrency=' + GoldCurrency + "where UserID='" + UserID + "'";
    querySql("Game", sql, callback)
}
// 插入元宝
exports.insertYuanBao = function(UserID, YuanBao, callback) {
    let sql = "insert into dbo.GUserToken (UserID, YuanBao) values ('" + UserID + "'" + "," + YuanBao + ")";
    querySql("Game", sql, callback)
}
// 更新元宝
exports.updateGoldCurrency = function(UserID, YuanBao, callback) {
    let sql = 'update dbo.GUserToken set YuanBao=' + YuanBao + "where UserID='" + UserID + "'";
    querySql("Game", sql, callback)
}

exports.querySql           = querySql
exports.selectUser         = selectUser