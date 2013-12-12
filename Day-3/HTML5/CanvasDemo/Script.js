
function drawRectangle() {
    var elem = document.getElementById('canvas');
    canvas = elem.getContext('2d');
    canvas.strokeRect(100, 100, 120, 120);
	canvas.fillStyle = "red";
    canvas.fillRect(110, 110, 100, 100);
    canvas.clearRect(120, 120, 80, 80);
}

function drawRectangleWithColor() {
    var elem = document.getElementById('canvas');
    canvas = elem.getContext('2d');
    canvas.fillStyle = "#000099";
    canvas.strokeStyle = "#990000";
    canvas.strokeRect(100, 100, 120, 120);
    canvas.fillRect(110, 110, 100, 100);
    canvas.clearRect(120, 120, 80, 80);
}

function doGradients() {
    var elem = document.getElementById('canvas');
    canvas = elem.getContext('2d');
    var grad = canvas.createLinearGradient(10, 10,200, 200);
	grad.addColorStop(0, '#FF0000');
    grad.addColorStop(0.5, '#0000FF');
    grad.addColorStop(1, '#000000');
    canvas.fillStyle = grad;
    //canvas.fillRect(10, 10, 100, 100);
    canvas.fillRect(10, 10, 200, 200);
}

function workWithPaths() {
    var elem = document.getElementById('canvas');
    canvas = elem.getContext('2d');
	canvas.fillStyle = "#FF0000";
    canvas.beginPath();
    canvas.moveTo(100, 100);
    canvas.lineTo(200, 200);
    canvas.lineTo(0, 200);
    canvas.closePath();
    //canvas.stroke();
    canvas.fill();
}

function workWithPaths2() {
    var elem = document.getElementById('canvas');
    canvas = elem.getContext('2d');
    canvas.beginPath();
    canvas.moveTo(100, 100);
    canvas.lineTo(200, 200);
    canvas.lineTo(100, 200);
    canvas.fill();
    canvas.clip();
    canvas.beginPath();
	canvas.strokeStyle = "#CCC";
    for (f = 0; f < 300; f = f + 10) {
        canvas.moveTo(0, f);
        canvas.lineTo(500, f);
    }
    canvas.stroke();
}

function circlesWithArc() {
    
        var elem = document.getElementById('canvas');
        canvas = elem.getContext('2d');
        canvas.beginPath();
        canvas.arc(100, 100, 50, 0, Math.PI * 2, false);
        canvas.stroke();

    }

    function arcOf45degrees() {
        var elem = document.getElementById('canvas');
        canvas = elem.getContext('2d');
        canvas.beginPath();
        var radians = Math.PI / 180 * 45;
        canvas.arc(100, 100, 50, 0, radians, false);
        canvas.stroke(); 
    }

    function complexCurves() {
        var elem = document.getElementById('canvas');
        canvas = elem.getContext('2d');
        canvas.beginPath();
        canvas.moveTo(50, 50);
        canvas.quadraticCurveTo(100, 125, 50, 200);
        canvas.moveTo(250, 50);
        canvas.bezierCurveTo(200, 125, 300, 125, 250, 200);
        canvas.stroke();
    }

    function lineStyles() {
        var elem = document.getElementById('canvas');
        canvas = elem.getContext('2d');
        canvas.beginPath();
        canvas.arc(200, 150, 50, 0, Math.PI * 2, false);
        canvas.stroke();
        canvas.lineWidth = 10;
        canvas.lineCap = "round";
        canvas.beginPath();
        canvas.moveTo(230, 150);
        canvas.arc(200, 150, 30, 0, Math.PI, false);
        canvas.stroke();
        canvas.lineWidth = 5;
        canvas.lineJoin = "miter";
        canvas.beginPath();
        canvas.moveTo(195, 135);
        canvas.lineTo(215, 155);
        canvas.lineTo(195, 155);
        canvas.stroke();
    }

    function drawText() {
        var elem = document.getElementById('canvas');
        canvas = elem.getContext('2d');
        canvas.font = "bold 24px verdana, sans-serif";
        canvas.textAlign = "start";
        canvas.textBaseline = "bottom";
        canvas.fillText("My message", 100, 124);
        var size = canvas.measureText("My message");
        canvas.strokeRect(100, 100, size.width, 24);
    }

    function fillShadows() {
        var elem = document.getElementById('canvas');
        canvas = elem.getContext('2d');
        canvas.shadowColor = "rgba(128,128,128,0.5)";
        canvas.shadowOffsetX = 5;
        canvas.shadowOffsetY = 5;
        canvas.shadowBlur = 0;
        canvas.font = "bold 50px verdana, sans-serif";
        canvas.fillText("my message", 100, 100);
    }

    function transformations() {
        var elem = document.getElementById('canvas');
        canvas = elem.getContext('2d');
        canvas.font = "bold 20px verdana, sans-serif";
        canvas.fillText("TEST", 50, 20);
        canvas.translate(50, 70);
        canvas.rotate(Math.PI / 180 * 45);
        canvas.fillText("TEST", 0, 0);
        canvas.rotate(-Math.PI / 180 * 45);
        canvas.translate(0, 100);
        canvas.scale(2, 2);
        canvas.fillText("TEST", 0, 0);
    }

    function drawImage() {
        var elem = document.getElementById('canvas');
        canvas = elem.getContext('2d');
        var img = new Image();
        img.src = "ajax-loader.gif";
        img.addEventListener("load", function () {
            canvas.drawImage(img, 20, 20)
        }, false);
    }
    function triggerAnimation() {
        var elem = document.getElementById('canvas');
        canvas = elem.getContext('2d');
        window.addEventListener('mousemove', animation, false);
    }
    function animation(e) {
        //canvas.clearRect(0, 0, 300, 500);
        var xmouse = e.clientX;
        var ymouse = e.clientY;
        var xcenter = 220;
        var ycenter = 150;
        var ang = Math.atan2(xmouse - xcenter, ymouse - ycenter);
        var x = xcenter + Math.round(Math.sin(ang) * 10);
        var y = ycenter + Math.round(Math.cos(ang) * 10);
        canvas.beginPath();
        canvas.arc(xcenter, ycenter, 20, 0, Math.PI * 2, false);
        canvas.moveTo(xcenter + 70, 150);
        canvas.arc(xcenter + 50, 150, 20, 0, Math.PI * 2, false);
        canvas.stroke();
        canvas.beginPath();
        canvas.moveTo(x + 10, y);
        canvas.arc(x, y, 10, 0, Math.PI * 2, false);
        canvas.moveTo(x + 60, y);
        canvas.arc(x + 50, y, 10, 0, Math.PI * 2, false);
        canvas.fill();
    }