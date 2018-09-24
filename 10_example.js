//connections

const https = require('https');
const crypto = require('crypto');
const fs = require('fs');

const start = Date.now();

function doRequest() {
    https.request('https://www.google.com', res=>{
        res.on('data', ()=>{});
        res.on('end', ()=>{
            console.log(Date.now()-start);
        });
    }).end();
}

function doHash(){
    crypto.pbkdf2('jdvjsdgv','b',100000,512,'sha512',()=>{
        console.log('Hush:',Date.now()-start);
    });
}

doRequest();
fs.readFile('aviasales.html','utf8',()=>{
    console.log('FS',Date.now()-start);
});

doHash();
doHash();
doHash();
doHash();


//var result = Object.assign({id:1},{id:5})//затенение, значение будет 5*/
