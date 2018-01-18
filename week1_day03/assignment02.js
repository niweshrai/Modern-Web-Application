const   fs = require('fs'),
        http = require('http'),
        image = "./img/bluesky.jpg";
let server = http.createServer((req, res) => {

    //Asynhronous way to read image in a non blocking manner, where all file is read to buffer
    
    /*
    fs.readFile(image, function(err, data) {
      if (err) throw err;
      res.writeHead(200, {'Content-Type': 'image/jpeg'});
      res.end(data);
    });
    */
    
    //Synchronous way of reading the image. It is blocking, where all file is read to buffer.
    
    /*
    let img = fs.readFileSync(image);
    res.writeHead(200, {'Content-Type': 'image/jpeg'});
    res.end(img);
    */

    //Stream here reads image, which works in a more efficient manner.
    let rStream = fs.createReadStream(image);
    rStream.pipe(res);
});

server.listen(8001, () =>console.log('NodeJS is listening to port 8001'));