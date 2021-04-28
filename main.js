
class Hero{
    constructor(img,x,y,w,h) {
        this.img=new Image();
        this.img.src=img;
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.speed=5;
        this.hp=100;
    }
    drawHero(){
        context.drawImage(this.img,this.x,this.y,this.w,this.h)
    }
    moveL(){
        if(this.x>0 || this.x<canvas.width-this.w){
            this.x-=this.speed;
        }
    }
    moveR(){
        if(this.x>0 || this.x<canvas.width-this.w){
            this.x-=this.speed;
        }
    }
    moveU(){
        if(this.y>0 || this.y<canvas.height-this.h){
            this.x-=this.speed;
        }
    }
    moveD(){
        if(this.y>0 || this.y<canvas.height-this.h){
            this.y-=this.speed;
        }
    }
}

