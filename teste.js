var pedido = [1,3];

var menu = [{  nome: 'agua',
                 id: 1},

               { nome: 'refri',
                 id: 2,
                } 
                ];

var acertos = [];

for(var i=0; i<menu.length; i++) {

    if(menu.indexOf(pedido[i]) > -1) {

        acertos.push(pedido[i]);
    }
}
menu.map(function(e)) => { console.log(e);}

pos = myArray.map(function(e) { return e.hello; }).indexOf('stevie');
console.log(acertos);
