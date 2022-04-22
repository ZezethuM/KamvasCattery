function weeklyWage(band, weeklyHours) {
    
   var wage = 0;
   var arr = weeklyHours.split(',');
    for(var i = 0; i < arr.length; i++) {
        if(arr.length < 6){
            return "missing day"
        }
        else if(band == "A"){
            wage += 23 * arr[i];
        }
        else if(band == "B") {
            wage += 37 * arr[i]
        }
        else if(band == "C") {
            wage += 51 * arr[i];
        }
        else {
            return 0;
        }
    }
    return wage;
}
