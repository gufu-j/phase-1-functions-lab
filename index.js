// Code your solution in this file
function distanceFromHqInBlocks(someValue){
    if (someValue > 42){
        return someValue-42;

    } else if (someValue<42 && someValue>0) {
        return 42-someValue;
    }
}

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue)*264;
   
    



}

function distanceTravelledInFeet(start, destination){
    if ( start > destination ) {
        return (start-destination)*264;

    } else if ( destination > start ){
        return (destination-start)*264;

    }

}

 function calculatesFarePrice(start, destination){
    const farOrClose= distanceTravelledInFeet(start, destination);
    const AfterFour = farOrClose-400;
        if (farOrClose < 400) {
            return 0;

        }
        else if (400 < farOrClose && farOrClose < 2000){
            return AfterFour*0.02;
        }
        else if (farOrClose > 2000 && farOrClose < 2500){
        return 25;
        }
        else {
            return "cannot travel that far";
        }

    }

