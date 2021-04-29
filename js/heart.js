const WIDTH_HEART=50;
const HEIGHT_HEART=50;
const IMG_HEART="./image/heart.png"

class Heart{
    constructor(x,y) {
        this.x=x;
        this.y=y;
        this.img=new Image();
        this.img.src=IMG_HEART;
        this.width=WIDTH_HEART;
        this.height=HEIGHT_HEART;
    }
    drawHeart(){
        context.drawImage(this.img,this.x,this.y);
    }
}