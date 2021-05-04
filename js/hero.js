const CHIEU_CAO_NHAN_VAT=100;
const CHIEU_RONG_NHAN_VAT=70;
const HP_NHAN_VAT=100;
const TOC_DO_NHAN_VAT=10;
const IMG_HERO="../image/contra1.png";

class Hero{
    constructor(x,y) {
        this.img=new Image();
        this.img.src=IMG_HERO;
        this.x=x;
        this.y=y;
        this.width=CHIEU_RONG_NHAN_VAT;
        this.height=CHIEU_CAO_NHAN_VAT;
        this.speed=TOC_DO_NHAN_VAT;
        this.hp=HP_NHAN_VAT;
        this.isMovingUp=false;
        this.isMovingDown=false;
    }
    drawHero(){
        if(this.hp<0){
            this.hp=0;
        }
        context.drawImage(this.img,this.x,this.y,this.width,this.height);
        context.beginPath()
        context.fillStyle="red";
        context.strokeStyle='black';
        context.fillRect(this.x,this.y-15,this.hp*0.6,10);
        context.strokeRect(this.x,this.y-15,this.hp*0.6,10);
        context.drawImage()
        context.closePath()
    }
    moveL(){
            this.x-=this.speed;
    }
    moveR(){
            this.x-=this.speed;
    }
    moveU() {
        this.y -= this.speed;
        if (this.y < 0) {
            this.y = 0
        }
    }
    moveD(){
            this.y+=this.speed;
            if(this.y>canvas.height-this.height){
                this.y=canvas.height-this.height;
            }
        }
    }


