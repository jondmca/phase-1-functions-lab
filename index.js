// Code your solution in this file!
const hq = 42;
function distanceFromHqInBlocks(block){
    let distance = block - hq;
    if (distance < 0){
        distance = distance * -1;
    }
    return distance;
}

function distanceFromHqInFeet(block){
    let feet = (block - hq) * 264;
    if (feet < 0){
        feet = feet * -1;
    }
    return feet;
}

function distanceTravelledInFeet(num1, num2){
    let result = (num1 - num2) * 264;
    if (result < 0){
        result = result * -1;
    }
    return result;
}

function calculatesFarePrice(start, destination){
    let dis = (start - destination) * 264;
        if (dis < 0){
        dis = dis * -1;
        }
    let price;
        if (dis <= 400){
        price = 0;
     } 
        else if (dis > 400 && dis <= 2000){
        dis = dis - 400;
        price = dis * 0.02;
        }
        else if (dis > 2000 && dis <= 2500){
            price = 25;
        }
        else if (dis > 2500){
        price = 'cannot travel that far';
        }
    return price
}