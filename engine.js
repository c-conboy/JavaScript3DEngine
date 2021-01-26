var Vertex = function(x,y,z){
    this.x = parseFloat(x);
    this.y = parseFloat(y);
    this.z = parseFloat(z);
}

var Vertex2D = function(x,y){
    this.x = parseFloat(x);
    this.y = parseFloat(y);
}


var Cube = function(center, size){
    var d = size/2;

    this.vertices = [
        new Vertex(center.x - d, center.y - d, center.z + d),
        new Vertex(center.x - d, center.y - d, center.z - d),
        new Vertex(center.x + d, center.y - d, center.z - d),
        new Vertex(center.x + d, center.y - d, center.z + d),
        new Vertex(center.x + d, center.y + d, center.z + d),
        new Vertex(center.x + d, center.y + d, center.z - d),
        new Vertex(center.x - d, center.y + d, center.z - d),
        new Vertex(center.x - d, center.y + d, center.z + d)
    ]

    //could make this more dynamic with loops

    this.faces = [
        [this.vertices[0], this.vertices[1], this.vertices[2], this.vertices[3]],
        [this.vertices[3], this.vertices[2], this.vertices[5], this.vertices[4]],
        [this.vertices[4], this.vertices[5], this.vertices[6], this.vertices[7]],
        [this.vertices[7], this.vertices[6], this.vertices[1], this.vertices[0]],
        [this.vertices[7], this.vertices[0], this.vertices[3], this.vertices[4]],
        [this.vertices[1], this.vertices[6], this.vertices[5], this.vertices[2]]
    ]

}






function render(objects, ctx, dx, dy){

    ctx.clearRect(0, 0, 2*dx, 2*dy);

    for(var i =0, numbObjects = objects.length; i < numbObjects; ++i){
        for(var j=0, numbFaces = objects[j].faces.length; j < numbFaces; ++j){
           
            var face = objects[i].faces[j];

            var P = project(face[0]);  
            
            ctx.beginPath();
            ctx.moveTo(P.x + dx, -P.y + dy);

            for (var k=0, numbVertices = face.length; k < numbVertices; ++k){
                P = project(face[k]);
                ctx.lineTo(P.x + dx, -P.y + dy);
            }
           
        
            ctx.closePath();
            ctx.stroke();
            ctx.fill();


        }
    }
}

function project(M){
    return new Vertex2D(M.x, M.z);
}


function rotate(M, center, theta, pi){
    //Rotation matrix 
    var ct = Math.cos(theta);
    var st = Math.sin(theta);
    var cp = Math.cos(pi);
    var sp = Math.sin(pi);



    var x = M.x - center.x;
    var y = M.y - center.y;
    var z = M.z - center.z;

    M.x = ct * x - st * cp * y + st * sp * z + center.x;
	M.y = st * x + ct * cp * y - ct * sp * z + center.y;
	M.z = sp * y + cp * z + center.z;
}


function autoRotate(){
    for (var i = 0; i < 8; i++){
        rotate(cube1.vertices[i], cube_center, -Math.PI/720, Math.PI/720);
    }
    render(objects, ctx, dx, dy);

    setTimeout(autoRotate, 20);
}


var canvas = document.getElementById('myChart'); 
var ctx = canvas.getContext('2d');
ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
ctx.fillStyle = 'rgba(0, 150, 255, 0.3)';
var dx = canvas.width / 2;
var dy = canvas.height / 2;

var cube_center = new Vertex(0,11*dy/10,0);


var cube1 = new Cube(cube_center, dy);

var objects = [cube1];


render(objects, ctx, dx, dy);

setTimeout(autoRotate, 20);






