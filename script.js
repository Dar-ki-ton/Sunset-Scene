var cnv = document.getElementById("canvas");
var ctx = cnv.getContext(`2d`);
cnv.width = 500;
cnv.height = 400;

// Sky
ctx.fillStyle = `#3F007A`;
ctx.fillRect(0, 0, 500, 400);

// The Sun
ctx.fillStyle = `#4C0091`;
ctx.beginPath();
ctx.arc(130, 150, 300, 0, 2 * Math.PI);
ctx.fill();

// Sky to the Sun
ctx.fillStyle = `#5500A2`;
ctx.beginPath();
ctx.arc(130, 150, 280, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = `#6100BA`;
ctx.beginPath();
ctx.arc(130, 150, 250, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = `#6F00D4`;
ctx.beginPath();
ctx.arc(130, 150, 225, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = `#7B00EC`;
ctx.beginPath();
ctx.arc(130, 150, 200, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = `#8500FF`;
ctx.beginPath();
ctx.arc(130, 150, 190, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = `#8512ED`;
ctx.beginPath();
ctx.arc(130, 150, 180, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = `#8A1FE0`;
ctx.beginPath();
ctx.arc(130, 150, 170, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = `#872DD2`;
ctx.beginPath();
ctx.arc(130, 150, 160, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = `#843BC4`;
ctx.beginPath();
ctx.arc(130, 150, 155, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = `#8142BD`;
ctx.beginPath();
ctx.arc(130, 150, 140, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = `#8053AC`;
ctx.beginPath();
ctx.arc(130, 150, 135, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = `#80629D`;
ctx.beginPath();
ctx.arc(130, 150, 130, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = `#82708F`;
ctx.beginPath();
ctx.arc(130, 150, 125, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = `#837C7C`;
ctx.beginPath();
ctx.arc(130, 150, 120, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = `#8E8971`;
ctx.beginPath();
ctx.arc(130, 150, 115, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = `#A3915C`;
ctx.beginPath();
ctx.arc(130, 150, 110, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = `#BB9144`;
ctx.beginPath();
ctx.arc(130, 150, 105, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = `#D09F2F`;
ctx.beginPath();
ctx.arc(130, 150, 100, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = `#DC9E23`;
ctx.beginPath();
ctx.arc(130, 150, 95, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = `#EE9811`;
ctx.beginPath();
ctx.arc(130, 150, 90, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = `#FF8C00`;
ctx.beginPath();
ctx.arc(130, 150, 80, 0, 2 * Math.PI);
ctx.fill();

// Stars
var star = document.getElementById(`image2`);
ctx.drawImage(star, 450, 0, 50, 45);
ctx.drawImage(star, 360, 50, 50, 45);
ctx.drawImage(star, 390, -20, 50, 45);

// Mountain
ctx.fillStyle = `#59A956`;
ctx.beginPath();
ctx.moveTo(0, 220);
ctx.lineTo(10, 220);
ctx.lineTo(20, 230);
ctx.lineTo(30, 240);
ctx.lineTo(50, 230);
ctx.lineTo(60, 180);
ctx.lineTo(70, 150);
ctx.lineTo(150, 120);
ctx.lineTo(180, 140);
ctx.lineTo(200, 200);
ctx.lineTo(220, 220);
ctx.lineTo(250, 240);
ctx.lineTo(275, 245);
ctx.lineTo(300, 240);
ctx.lineTo(305, 200);
ctx.lineTo(320, 150);
ctx.lineTo(325, 140);
ctx.lineTo(330, 135);
ctx.lineTo(340, 160);
ctx.lineTo(360, 180);
ctx.lineTo(380, 170);
ctx.lineTo(400, 80);
ctx.lineTo(450, 50);
ctx.lineTo(480, 60);
ctx.lineTo(500, 80);
ctx.lineTo(500, 400);
ctx.lineTo(0, 400);
ctx.fill();

// Mountain Shade I
ctx.fillStyle = `#55A152`;
ctx.beginPath();
ctx.moveTo(0, 230);
ctx.lineTo(5, 230);
ctx.lineTo(25, 260);
ctx.lineTo(60, 240);
ctx.lineTo(70, 180);
ctx.lineTo(80, 160);
ctx.lineTo(150, 140);
ctx.lineTo(170, 150);
ctx.lineTo(180, 200);
ctx.lineTo(240, 250);
ctx.lineTo(280, 255);
ctx.lineTo(320, 250);
ctx.lineTo(325, 200);
ctx.lineTo(335, 150);
ctx.lineTo(340, 160);
ctx.lineTo(360, 180);
ctx.lineTo(400, 175);
ctx.lineTo(420, 90);
ctx.lineTo(460, 60);
ctx.lineTo(480, 65);
ctx.lineTo(500, 85);
ctx.lineTo(500, 400);
ctx.lineTo(0, 400);
ctx.fill();

// Mountain Shade II
ctx.fillStyle = `#248C35`;
ctx.beginPath();
ctx.moveTo(0, 230);
ctx.lineTo(5, 230);
ctx.lineTo(20, 280);
ctx.lineTo(75, 250);
ctx.lineTo(90, 200);
ctx.lineTo(150, 180);
ctx.lineTo(160, 185);
ctx.lineTo(165, 210);
ctx.lineTo(230, 270);
ctx.lineTo(280, 280);
ctx.lineTo(330, 270);
ctx.lineTo(340, 210);
ctx.lineTo(350, 170);
ctx.lineTo(360, 180);
ctx.lineTo(410, 190);
ctx.lineTo(430, 120);
ctx.lineTo(480, 65);
ctx.lineTo(500, 85);
ctx.lineTo(500, 400);
ctx.lineTo(0, 400);
ctx.fill();

// Mountain Lighting II
ctx.fillStyle = `#9AB748`;
ctx.beginPath();
ctx.moveTo(300, 240);
ctx.lineTo(305, 200);
ctx.lineTo(320, 150);
ctx.lineTo(325, 140);
ctx.lineTo(330, 135);
ctx.lineTo(335, 150);
ctx.lineTo(325, 200);
ctx.lineTo(320, 250);
ctx.lineTo(310, 250);
ctx.fill();

// Mountain Snow I
ctx.fillStyle = `#83807C`;
ctx.beginPath();
ctx.moveTo(60, 180);
ctx.lineTo(70, 150);
ctx.lineTo(150, 120);
ctx.lineTo(180, 140);
ctx.lineTo(170, 180);
ctx.lineTo(160, 180);
ctx.lineTo(150, 170);
ctx.lineTo(130, 180);
ctx.lineTo(100, 180);
ctx.lineTo(90, 200);
ctx.fill();

// Mountain Lighting I
ctx.fillStyle = `#9AB748`;
ctx.beginPath();
ctx.moveTo(0, 220);
ctx.lineTo(10, 220);
ctx.lineTo(20, 230);
ctx.lineTo(30, 240);
ctx.lineTo(50, 230);
ctx.lineTo(60, 180);
ctx.lineTo(70, 150);
ctx.lineTo(150, 120);
ctx.lineTo(180, 140);
ctx.lineTo(200, 200);
ctx.lineTo(250, 240);
ctx.lineTo(280, 255);
ctx.lineTo(240, 250);
ctx.lineTo(180, 200);
ctx.lineTo(170, 150);
ctx.lineTo(150, 140);
ctx.lineTo(80, 160);
ctx.lineTo(70, 180);
ctx.lineTo(55, 235);
ctx.lineTo(25, 250);
ctx.lineTo(5, 230);
ctx.lineTo(0, 230);
ctx.fill();

// Snow Lighting I
ctx.fillStyle = `white`;
ctx.beginPath();
ctx.moveTo(60, 180);
ctx.lineTo(70, 150);
ctx.lineTo(150, 120);
ctx.lineTo(180, 140);
ctx.lineTo(173, 168);
ctx.lineTo(170, 150);
ctx.lineTo(150, 140);
ctx.lineTo(80, 160);
ctx.lineTo(68, 185);
ctx.fill();

// Mountain Snow II
ctx.fillStyle = `#83807C`;
ctx.beginPath();
ctx.moveTo(400, 80);
ctx.lineTo(450, 50);
ctx.lineTo(480, 60);
ctx.lineTo(500, 80);
ctx.lineTo(500, 100);
ctx.lineTo(470, 85);
ctx.lineTo(465, 90);
ctx.lineTo(460, 90);
ctx.lineTo(460, 110);
ctx.lineTo(420, 110);
ctx.lineTo(410, 90);
ctx.lineTo(390, 125);
ctx.fill();

// Mountain Lighting III
ctx.fillStyle = `#9AB748`;
ctx.beginPath();
ctx.moveTo(380, 170);
ctx.lineTo(400, 80);
ctx.lineTo(450, 50);
ctx.lineTo(480, 60);
ctx.lineTo(480, 60);
ctx.lineTo(500, 80);
ctx.lineTo(500, 85);
ctx.lineTo(480, 65);
ctx.lineTo(420, 90);
ctx.lineTo(400, 175);
ctx.lineTo(390, 175);
ctx.fill();

// Snow Lighting II
ctx.fillStyle = `white`;
ctx.beginPath();
ctx.moveTo(390, 125);
ctx.lineTo(400, 80);
ctx.lineTo(450, 50);
ctx.lineTo(480, 60);
ctx.lineTo(500, 80);
ctx.lineTo(500, 85);
ctx.lineTo(480, 65);
ctx.lineTo(420, 90);
ctx.lineTo(418, 105);
ctx.lineTo(410, 90);
ctx.fill();

// City
var city = document.getElementById(`image1`);
ctx.drawImage(city, 0, 200, 500, 250);

// Title
ctx.fillStyle = `orange`;
ctx.font = `20px Impact`;
ctx.fillText(`Day Ends,`, 20, 25);
ctx.fillStyle = `#5500A2`;
ctx.fillText(`Night Begins...`, 100, 25);
