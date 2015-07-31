/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


    function calcSal(){
                    $(document.getElementById('mockery')).hide();
                    
                    var calc = (Math.round(document.getElementById('hourlywageref').value * document.getElementById('hoursperdayref').value 
                            * document.getElementById('daysperweekref').value * 4 * 12));
                    
                    $(document.getElementById('mockery')).html(calc).fadeIn(500) ;
                    
                }