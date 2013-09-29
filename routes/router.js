// Set us up to use JSON5
require('json5/lib/require');

var networkInterfaces = require("os").networkInterfaces(),
    config = require("../config");


// GET /presentations/:id
exports.showPresentation = function( req, res ) {
    var id = req.params.id;
    console.log( "Getting presentation " + id );

    // Load the html with this id
    var htmlFile = fs.readFileSync( "./converted/" + id + "/index.html", {encoding:"utf8"} );

    console.log( htmlFile );

    if( htmlFile != undefined ) {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write( htmlFile );
        res.end();
    } else
        res.json( 500, {'error':'presentation not found'} );

}