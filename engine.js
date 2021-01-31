

//3D vertex
var Vertex = function(x,y,z){
    this.x = parseFloat(x);
    this.y = parseFloat(y);
    this.z = parseFloat(z);
}

//2D vertex
var Vertex2D = function(x,y){
    this.x = parseFloat(x);
    this.y = parseFloat(y);
}



//Cube Contructor
var Cube = function(center, size){
    var d = size/2;


    //Create vertex
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

    //Create Faces
    this.faces = [
        [this.vertices[0], this.vertices[1], this.vertices[2], this.vertices[3]],
        [this.vertices[3], this.vertices[2], this.vertices[5], this.vertices[4]],
        [this.vertices[4], this.vertices[5], this.vertices[6], this.vertices[7]],
        [this.vertices[7], this.vertices[6], this.vertices[1], this.vertices[0]],
        [this.vertices[7], this.vertices[0], this.vertices[3], this.vertices[4]],
        [this.vertices[1], this.vertices[6], this.vertices[5], this.vertices[2]]
    ]

}

//Pyramid Contructor
var Pyramid = function(center, r, h){

    var dz = h/2

    //Create vertex
    this.vertices = [
        new Vertex(center.x, center.y, center.z + dz),
        new Vertex(center.x + r, center.y + r, center.z - dz),
        new Vertex(center.x - r, center.y + r, center.z - dz),
        new Vertex(center.x + r, center.y - r, center.z - dz),
        new Vertex(center.x - r, center.y - r, center.z - dz),
    ]

    //could make this more dynamic with loops

    //Create Faces
    this.faces = [
        [this.vertices[0], this.vertices[1], this.vertices[2]],
        [this.vertices[0], this.vertices[1], this.vertices[3]],
        [this.vertices[0], this.vertices[4], this.vertices[2]],
        [this.vertices[0], this.vertices[4], this.vertices[3]],
        [this.vertices[1], this.vertices[2], this.vertices[3], this.vertices[4]]
    ]




    
}


var Icosahedron = function(center, r){

    var c1 = Math.cos(2*(Math.PI)/5);
    var c2 = Math.cos((Math.PI)/5);
    var s1 = Math.sin(2*(Math.PI)/5);
    var s2 = Math.sin(4*(Math.PI)/5);



    var dL = 2*r/(Math.sqrt(6)+Math.sqrt(2));


    this.vertices = [

        //Pentagon Plane #1
        new Vertex(center.x, center.y - r, center.z+r/2),//0N
        new Vertex(center.x + s1*r, center.y - c1*r, center.z+r/2),//1O
        new Vertex(center.x + s2*r, center.y + c2*r, center.z+r/2),//2P
        new Vertex(center.x - s2*r, center.y + c2*r, center.z+r/2),//3L
        new Vertex(center.x - s1*r, center.y - c1*r, center.z+r/2),//4M

        //Pentagon Plane #3
        new Vertex(center.x, center.y + r, center.z-r/2),//5Q
        new Vertex(center.x + s1*r, center.y + c1*r, center.z-r/2),//6U
        new Vertex(center.x + s2*r, center.y - c2*r, center.z-r/2),//7T
        new Vertex(center.x - s2*r, center.y - c2*r, center.z-r/2),//8S
        new Vertex(center.x - s1*r, center.y + c1*r, center.z-r/2),//9R

        //Top tip
        new Vertex(center.x, center.y, center.z + r/2 + dL),//10X

        //Bottom tip
        new Vertex(center.x, center.y, center.z - r/2 - dL),//11Z

    ]

    this.faces = [
        //Top cone
        [this.vertices[10], this.vertices[0], this.vertices[4]], //XMN
        [this.vertices[10], this.vertices[0], this.vertices[1]], //XNO
        [this.vertices[10], this.vertices[1], this.vertices[2]], //XPO
        [this.vertices[10], this.vertices[2], this.vertices[3]], //XPL
        [this.vertices[10], this.vertices[3], this.vertices[4]], //XLM
        
        //Sides
        [this.vertices[4], this.vertices[0], this.vertices[8]], //MNS -
        [this.vertices[8], this.vertices[7], this.vertices[0]], //STN +
        [this.vertices[0], this.vertices[1], this.vertices[7]], //NOT -
        [this.vertices[7], this.vertices[6], this.vertices[1]], //TUO +
        [this.vertices[2], this.vertices[1], this.vertices[6]], //POU -
        [this.vertices[5], this.vertices[6], this.vertices[2]], //QUP +
        [this.vertices[3], this.vertices[2], this.vertices[5]], //LPQ -
        [this.vertices[5], this.vertices[9], this.vertices[3]], //QRL +
        [this.vertices[3], this.vertices[4], this.vertices[9]], //LMR -
        [this.vertices[9], this.vertices[8], this.vertices[4]], //RSM +

        //Bottom Cone
        [this.vertices[11], this.vertices[8], this.vertices[7]], //ZST
        [this.vertices[11], this.vertices[7], this.vertices[6]], //ZTU
        [this.vertices[11], this.vertices[5], this.vertices[6]], //ZQU
        [this.vertices[11], this.vertices[5], this.vertices[9]], //ZQR
        [this.vertices[11], this.vertices[9], this.vertices[8]] //ZRS
        
    ]


}





//Render Function
function render(objects, ctx, dx, dy){

    //Clears last render
    ctx.clearRect(0, 0, 2*dx, 2*dy);

    for(var i =0, numbObjects = objects.length; i < numbObjects; ++i){
        for(var j=0, numbFaces = objects[i].faces.length; j < numbFaces; ++j){
           
            var face = objects[i].faces[j];//gets current face 
           
            var P = project(face[0]); //P is projection of first vertex
            
            ctx.beginPath();
            ctx.moveTo(P.x + dx, -P.y + dy);//moves pen to projection of first vertex

            for (var k=0, numbVertices = face.length; k < numbVertices; ++k){//draws line to each 2d projection of each vertex to draw shape
                P = project(face[k]);
                ctx.lineTo(P.x + dx, -P.y + dy);
            }
           
        
            ctx.closePath();
            ctx.stroke();
            ctx.fill();


        }//Loops through each face in object
    }//Loops through all objects in objects array
}

//2D projection of 3D point
function project(M){
    return new Vertex2D(M.x, M.z);
}

//Rotates a vertex using a rotation matrix
function rotate(M, center, theta, pi){
    //Rotation matrix 
    var ct = Math.cos(theta);
    var st = Math.sin(theta);
    var cp = Math.cos(pi);
    var sp = Math.sin(pi);


    //vector from center to vertex
    var x = M.x - center.x;
    var y = M.y - center.y;
    var z = M.z - center.z;

    //rotate
    M.x = ct * x - st * cp * y + st * sp * z + center.x;
	M.y = st * x + ct * cp * y - ct * sp * z + center.y;
	M.z = sp * y + cp * z + center.z;
}

//Autorates if theres no input
function autoRotate(){
    if(mousedown == false){
        for (var z = 0; z < objects.length; ++z){
            for (var i = 0; i < objects[z].vertices.length; i++){
                rotate(objects[z].vertices[i], cube_center, -Math.PI/720, Math.PI/720);
            }
        }
        render(objects, ctx, dx, dy);

        setTimeout(autoRotate, 5);
    }
}

//Event when mousedown, sets reference mouse position
function initiateMove(evt){
    mousedown = true;
    cx = evt.clientX;
    cy = evt.clientY;
}

//Moves Shapes, event on mouse move
function move(evt){
    if(mousedown == true){//Check that mouse is down
        var theta = 0.6*(cx - evt.clientX)*Math.PI/360;//difference between reference position and current postion, converted into angle, x axis
        var pi = 0.6*(cy - evt.clientY)*Math.PI/180;//difference between reference position and current postion, converted into angle, y axis

        for (var z = 0; z < objects.length; ++z){//runs through each object
            for (var i = 0; i < objects[z].vertices.length; i++){//Thoguh each vertex
                rotate(objects[z].vertices[i], cube_center, theta, pi);//Rotates each vertex
            }
        }
        render(objects, ctx, dx, dy);//rerenders

        cx = evt.clientX;//update reference mosue position
        cy = evt.clientY;
    }
}

function stopMove(){//evt mosue up
    mousedown = false; 
    setTimeout(autoRotate(objects), 1000);
}


function clearObjects(){
    objects = [];
}

function newShape(shape){
    clearObjects();
    switch(shape){
        case 'cube' :
            objects[0] = new Cube(cube_center, dy);
            break;
        case 'pyramid' : 
            objects[0] = new Pyramid(cube_center, dy/2, dy);
            break;
        case 'icosahedron' :
            objects[0] = new Icosahedron(cube_center, dy/2);
            break;
        default:
            console.log("Invalid Shape");
    }

    stopMove();

}



//canvas setup
var canvas = document.getElementById('myChart'); 
var ctx = canvas.getContext('2d');

ctx.canvas.width  = window.innerWidth -200;
ctx.canvas.height = window.innerHeight - 200;
ctx.strokeStyle = 'rgba(0, 0, 0, 0.6)';
ctx.fillStyle = 'rgba(72, 209, 204, 0.3)';

//reference center
var dx = canvas.width / 2;
var dy = canvas.height / 2;


var cube_center = new Vertex(0,11*dy/10,0);


var cube1 = new Cube(cube_center, dy);
var cube2 = new Cube(cube_center, dy/2);
var pyramid1 = new Pyramid(cube_center, dy/2, dy);
var pyramid2 = new Pyramid(cube_center, dy/4, dy/2);
var icosahedron1 = new Icosahedron(cube_center, dy/2);

var objects = [cube1, pyramid1, icosahedron1];


//event setup
canvas.addEventListener('mousedown', initiateMove);
document.addEventListener('mousemove', move);
document.addEventListener('mouseup', stopMove);

var cx = 0;
var cy = 0;

var mousedown = false;

//first render
render(objects, ctx, dx, dy);





 






