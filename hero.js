const CHIEU_CAO_NHAN_VAT=100;
const CHIEU_RONG_NHAN_VAT=70;
const HP_NHAN_VAT=60;
const TOC_DO_NHAN_VAT=10;
const SIZE_NHAN_VAT=50


class Hero{
    constructor(img,x,y) {
        this.img=new Image();
        this.img.src=img;
        this.x=x;
        this.y=y;
        this.width=CHIEU_RONG_NHAN_VAT;
        this.height=CHIEU_CAO_NHAN_VAT;
        this.speed=TOC_DO_NHAN_VAT;
        this.hp=HP_NHAN_VAT;
        this.isMovingUp=false;
        this.isMovingDown=false;
        this.size=SIZE_NHAN_VAT;
    }
    drawHero(){
        context.drawImage(this.img,this.x,this.y,this.width,this.height);
        context.beginPath()
        context.fillStyle="red";
        context.strokeStyle='black';
        context.fillRect(this.x,this.y-15,this.hp,10);
        context.strokeRect(this.x,this.y-15,this.hp,10);
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


