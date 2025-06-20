 function right(){
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    turnLeft();
    move();
 }
 function left(){
    turnLeft();
      move();
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    turnRight();
    move();
    turnRight();
 }
function main(){
   //your code here
   right();
   left();
   right();
   left();
   right();
  }