var mysql = require("mysql");

function xeround() {
    var client = mysql.createClient({
      user: 'cine',
      password: '123456A*',
      host: 'instance12442.db.xeround.com',
      port: '8441',
    });
    
    client.query('USE cinemius');
    
    /*client.query(
      'INSERT INTO usuario SET nombre = ?, password = ?',
      ['carlosro_ec', 'miclave']
    );*/
    
    client.query(
        'SELECT * FROM test',
    	function selectUsuario(err, results, fields) {

        	if (err) {
        	    console.log("Error: " + err.message);
        	    throw err;
        	}
        
        	console.log("Number of rows: "+results.length);
        	console.log(results);
        
        	client.end();
    });
    
    return "ok";
}

exports.xeround = xeround;