//var_let

for(var i=0;i<10;i++){// если записать let будем по-другому все показываться
    setTimeout(
        function(){
            console.log(i);
        },i*1000);
}