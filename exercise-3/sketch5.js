let hearts = [];

function setup() {
    createCanvas(2000, 800);

    for (var i = 0; i < width; i++) {
        let x = i * 50 + 10
        hearts[i] = new Heart(x, random(0, height));
    }
}

function draw() {
    background(220);

    for (var i = 0; i < hearts.length; i++) {
        hearts[i].drawing();
    }
}

function mousePressed() {
    bellasHeart = new Heart(mouseX, mouseY);
    hearts.push(bellasHeart);
    
}

class Heart {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    drawing() {
        red = map(this.y, 0, 255, 100, 255);
        fill(red, 100, 150);
        noStroke();

        arc(this.x, this.y, 20, 25, PI, 0);
        arc(this.x + 20, this.y, 20, 25, PI, 0);
        triangle(this.x - 10, this.y, this.x + 30, this.y, this.x + 10, this.y + 30);
    }

}