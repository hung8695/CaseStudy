const WIDTH_CHICKEN=50;
const HEIGHT_CHICKEN=50;
const HP_CHICKEN=30;
const SPEED_CHICKEN=1;
const IMG_CHICK='../image/ga.png';
const DMG_CHICKEN=10;
const DX=2;
const DY=5;

class Chicken {
    constructor( x, y) {
        this.img=new Image();
        this.img.src = IMG_CHICK;
        this.x = x;
        this.y = y;
        this.width = WIDTH_CHICKEN;
        this.height = HEIGHT_CHICKEN;
        this.speed = SPEED_CHICKEN
        this.hp = HP_CHICKEN;
        this.dmg=DMG_CHICKEN;
        this.dx=DX;
        this.dy=DY;
    }

    drawChicken(){
        if(this.hp>0){
            context.drawImage(this.img,this.x,this.y,this.width,this.height)
            context.beginPath();
            context.fillStyle="red";
            context.strokeStyle='black';
            context.fillRect(this.x+5,this.y-1,this.hp,5);
            context.strokeRect(this.x+5,this.y-1,this.hp,5);
            context.closePath();
        }
    }

    moveChicken(){
            this.x -= this.speed;
            if(score<=5){
                this.speed=3
            } else if( score<=10){
            this.speed=5;
        } else if(score<=15){
            this.speed=7;
        } else this.speed=9;
    }
}

