const canvas = document.getElementById("masa")
const context = canvas.getContext("2d")

canvas.width = 500;
canvas.height = 500;

let frames = 0;
// yem yediği an
let foodEaten = false;

// yönlendirmeler için değerlerimiz
const direction = {
    current: 0,
    idle: 0,
    right: 1,
    down: 2,
    left: 3,
    up: 4
}

document.addEventListener("keydown", function(evt) {
    switch (evt.keyCode) {
        case 37:
            //left'e taşı
            if (direction.current != direction.left && direction.current != direction.right) {
                direction.current = direction.left;
            }
            break;
        case 38:
            //yukarı taşı
            if (direction.current != direction.up && direction.current != direction.down) {
                direction.current = direction.up;
            }
            break;
        case 39:
            //sağa taşı
            if (direction.current != direction.left && direction.current != direction.right) {
                direction.current = direction.right;
            }
            break;
        case 40:
            //aşağı taşı
            if (direction.current != direction.up && direction.current != direction.down) {
                direction.current = direction.down;
            }
            break;

    }
});

//mesafeleri hesaplıyoruz..
function getDistance(x1, y1, x2, y2) {
    let distanceX = x2 - x1;
    let distanceY = y2 - y1;

    return Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2))

}


// yemlerin oluşturulması
const food = {
    x: canvas.width / 4,
    y: canvas.height / 4,
    r: 10,

    draw: function() {
        context.beginPath();
        context.fillStyle = "red";
        // arc çalışmamıştı kontrol et..
        context.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        context.fill();
        context.closePath();
    }

}

//yılınan oluşturulması ve metotlar.
// TODO: yem yendiğinde ortadan kalkacak
// TODO: bir objeye göre ilerleyecek, örneğin kare-kare
const snake = {
    r: 10,
    konum: [{ x: canvas.width / 2, y: canvas.height / 2 }],

    draw: function() {
        context.fillStyle = "black";
        for (i = 0; i < this.konum.length; i++) {
            let p = this.konum[i]
            context.beginPath();
            context.arc(p.x, p.y, this.r, 0, 2 * Math.PI);
            context.fill();
            context.closePath();
        }
    },

    move: function() {
        if (foodEaten) {
            this.konum.push({
                x: this.konum[this.konum.length - 1].x,
                y: this.konum[this.konum.length - 1].y
            })
            foodEaten = false;
        }


        if (this.konum[0].x < 0) this.konum[0].x = canvas.width - 10;
        if (this.konum[0].x > canvas.width) this.konum[0].x = 10;
        if (this.konum[0].y < 0) this.konum[0].y = canvas.width - 10;
        if (this.konum[0].y > canvas.height) this.konum[0].y = 10;

        for (let i = this.konum.length - 1; i > 0; i--) {
            if (this.konum[0].x == this.konum[i].x && this.konum[0].y == this.konum[i].y && this.konum.length > 2) {
                this.konum.splice(1)

                break;
            }
            this.konum[i].x = this.konum[i - 1].x;
            this.konum[i].y = this.konum[i - 1].y;



        }

        if (direction.current == direction.right) {
            this.konum[0].x += 5;
        }

        if (direction.current == direction.left) {
            this.konum[0].x -= 5;
        }

        if (direction.current == direction.up) {
            this.konum[0].y -= 5;
        }

        if (direction.current == direction.down) {
            this.konum[0].y += 5;
        }

        if (getDistance(food.x, food.y, this.konum[0].x, this.konum[0].y) <= 2 * food.r) {
            food.x = Math.random() * canvas.width;
            food.y = Math.random() * canvas.height;
            foodEaten = true;
        }

    }
}



function main() {
    context.clearRect(0, 0, canvas.width, canvas.height)
    snake.move();
    snake.draw();
    food.draw();
    frames++;
    requestAnimationFrame(main)
}
requestAnimationFrame(main)