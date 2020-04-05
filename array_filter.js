let selectedItem = [
    {item: "data ke 2", qty: 1},
    {item: "data ke 1 ", qty: 1},
    
];

let resultFilter = [];
var value ='data ke 2';
resultFilter= selectedItem.filter(function (e) {
  if(e.item == value){
    return e.qty = e.qty + 1;
  }
    
})

console.log(resultFilter);