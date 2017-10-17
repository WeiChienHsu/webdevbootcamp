var score = [90, 98, 89, 100, 100, 86, 84];
var score2 = [40, 64 ,77, 82, 80, 54, 73, 63, 95, 49];
function average(score){
    var sum = score.reduce(function(total,num){
        return total + num;        
    },0); 
    
    return Math.round(sum/(score.length));
}

console.log(average(score));
console.log(average(score2));