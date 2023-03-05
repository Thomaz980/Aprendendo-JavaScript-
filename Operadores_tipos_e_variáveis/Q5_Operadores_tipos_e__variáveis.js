// O programa abaixo deveria computar a média de 4 números, corrija todos os erros e comente cada uma das alterações feitas no código

/*  
a = 10
b = 16 
c = 14
d = 12
e = 18

media = a + b + c + d + e / 5
    
cosole.log("media")
*/

a = 10
b = 16 
c = 14
d = 12 // A letra "e" foi excluida, pois no enunciado o programa só precisa computar 4 números.

media = (a + b + c + d) / 4 // Foi adicionado o parênteses para que o fosse somado primeiro cada valor e foi excuido o quinto valor e dividido pelo número de elementos.

console.log(media) // Apagado as aspas para que o computador não interprete como um string.
