/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


    function calcSal(){
        $(document.getElementById('hrsErrsal')).hide();
        $(document.getElementById('wageErrsal')).hide();
        $(document.getElementById('daysErrsal')).hide();
        $(document.getElementById('mockery')).hide();
        
        var myWagehr = document.getElementById('hourlywageref').value;
        var myHrsWork = document.getElementById('hoursperdayref').value ;
        var myDaysWork = document.getElementById('daysperweekref').value;
        
        if (!isValidNum(myWagehr)){
            $(document.getElementById('wageErrsal')).show();
        }
        if (!isValidNum(myHrsWork)) {
            $(document.getElementById('hrsErrsal')).show();
            console.log("unhidden.\n");
        }
        if (!isValidNum(myDaysWork)){
            $(document.getElementById('daysErrsal')).show();
        }

        var calc = (Math.round(myWagehr * myHrsWork
                * myDaysWork * 4 * 12));

        $(document.getElementById('mockery')).html(calc).fadeIn(500) ;

    }
                
    function calcSalHr(){
       $(document.getElementById('hrsErrhr')).hide();
       $(document.getElementById('salErrhr')).hide();
       $(document.getElementById('daysErrhr')).hide();
       $(document.getElementById('mockperhour')).hide();
       
       console.log("hidden.\n");
        
        
        var myYearSal = document.getElementById('yearlysalref').value;
        var myHrsWork = document.getElementById('hoursperdayrefhr').value ;
        var myDaysWork = document.getElementById('daysperweekrefhr').value;
        
        if (!isValidNum(myHrsWork)) {
            $(document.getElementById('hrsErrhr')).show();
            console.log("unhidden.\n");
        }
        if (!isValidNum(myYearSal)){
            $(document.getElementById('salErrhr')).show();
        }
        if (!isValidNum(myDaysWork)){
            $(document.getElementById('daysErrhr')).show();
        }
        
                    
                    var calc = (Math.floor( myYearSal / (myHrsWork * myDaysWork * 4 * 12)));
                    
                    $(document.getElementById('mockperhour')).html(calc).fadeIn(500) ;
    
    }
    
    
    function isValidNum(tocheck){
        
        if (tocheck.match(/^([0-9]\d*)$/)){
             return true;
            
        } else {
            
            return false;
        }
    
    }