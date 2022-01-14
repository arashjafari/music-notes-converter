var data = [
    {'num': '1', 'char': 'C'},
    {'num': '2', 'char': 'D'},
    {'num': '3', 'char': 'E'},
    {'num': '4', 'char': 'F'},
    {'num': '5', 'char': 'G'},
    {'num': '6', 'char': 'A'},
    {'num': '7', 'char': 'B'},
];

function convertNum2Note(str)
{ 
    return str.split('').map(function(item){ 
        var result = data.filter(function(item2){
            return item2.num == item;
        });
        return result.length > 0 ? result[0].char : item; 
    }).join(''); 
}

function convertNote2Num(str)
{    
    return str.toUpperCase().split('').map(function(item){ 
        var result = data.filter(function(item2){
            return item2.char == item;
        });
        return result.length > 0 ? result[0].num : item; 
    }).join(''); 
}

String.prototype.enterToBr = function()
{
    return this.replaceAll('\n', '<br>');
}

const numerical = document.querySelector('#numerical');  
numerical.addEventListener('input', (event) => {
    const result = document.querySelector('#result-numerical'); 
    result.innerHTML = convertNum2Note( event.target.value).enterToBr();
});

const alphabetic = document.querySelector('#alphabetic');  
alphabetic.addEventListener('input', (event) => {
    const result = document.querySelector('#result-alphabetic'); 
    result.innerHTML = convertNote2Num( event.target.value).enterToBr();
});
