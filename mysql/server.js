var mysql=require('mysql');


var connection=mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'userinfo'

});

connection.connect();

var sql="DELETE FROM user where name='user'";

connection.query(sql,function(err,result){
	if(err){
		console.log('[SELECT ERROR] - ',err.message);
		return;
	}
	 console.log('--------------------------SELECT----------------------------');
       console.log(result);
       console.log('------------------------------------------------------------\n\n');  
});
 

connection.end();



