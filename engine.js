//4D Vertex
var Vertex4D = function(x,y,z,w){
    this.x = parseFloat(x);
    this.y = parseFloat(y);
    this.z = parseFloat(z);
    this.w = parseFloat(w);
}

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




var Tessaract = function (center, d){
    
    this.vertices = [
        new Vertex4D(center.x-d, center.y-d, center.z-d ,center.w-d),//[0] 0000
        new Vertex4D(center.x-d, center.y-d, center.z-d ,center.w+d),//[1] 0001
        new Vertex4D(center.x-d, center.y-d, center.z+d ,center.w-d),//[2] 0010
        new Vertex4D(center.x-d, center.y-d, center.z+d ,center.w+d),//[3] 0011
        new Vertex4D(center.x-d, center.y+d, center.z-d ,center.w-d),//[4] 0100
        new Vertex4D(center.x-d, center.y+d, center.z-d ,center.w+d),//[5] 0101
        new Vertex4D(center.x-d, center.y+d, center.z+d ,center.w-d),//[6] 0110
        new Vertex4D(center.x-d, center.y+d, center.z+d ,center.w+d),//[7] 0111
        new Vertex4D(center.x+d, center.y-d, center.z-d ,center.w-d),//[8] 1000
        new Vertex4D(center.x+d, center.y-d, center.z-d ,center.w+d),//[9] 1001
        new Vertex4D(center.x+d, center.y-d, center.z+d ,center.w-d),//[10] 1010
        new Vertex4D(center.x+d, center.y-d, center.z+d ,center.w+d),//[11] 1011
        new Vertex4D(center.x+d, center.y+d, center.z-d ,center.w-d),//[12] 1100
        new Vertex4D(center.x+d, center.y+d, center.z-d ,center.w+d),//[13] 1101
        new Vertex4D(center.x+d, center.y+d, center.z+d ,center.w-d),//[14] 1110
        new Vertex4D(center.x+d, center.y+d, center.z+d ,center.w+d),//[15] 1111
    ]


    this.edges = [
        [this.vertices[0], this.vertices[1]],
        [this.vertices[0], this.vertices[2]],
        [this.vertices[0], this.vertices[4]],
        [this.vertices[0], this.vertices[8]],
        [this.vertices[1], this.vertices[3]],
        [this.vertices[1], this.vertices[5]],
        [this.vertices[1], this.vertices[9]],
        [this.vertices[2], this.vertices[3]],
        [this.vertices[2], this.vertices[6]],
        [this.vertices[2], this.vertices[10]],
        [this.vertices[3], this.vertices[7]],
        [this.vertices[3], this.vertices[11]],
        [this.vertices[4], this.vertices[5]],
        [this.vertices[4], this.vertices[6]],
        [this.vertices[4], this.vertices[12]],
        [this.vertices[5], this.vertices[7]],
        [this.vertices[5], this.vertices[13]],
        [this.vertices[6], this.vertices[7]],
        [this.vertices[6], this.vertices[14]],
        [this.vertices[7], this.vertices[15]],
        [this.vertices[8], this.vertices[9]],
        [this.vertices[8], this.vertices[10]],
        [this.vertices[8], this.vertices[12]],
        [this.vertices[9], this.vertices[11]],
        [this.vertices[9], this.vertices[13]],
        [this.vertices[10], this.vertices[11]],
        [this.vertices[10], this.vertices[14]],
        [this.vertices[11], this.vertices[15]],
        [this.vertices[12], this.vertices[13]],
        [this.vertices[12], this.vertices[14]],
        [this.vertices[13], this.vertices[15]],
        [this.vertices[14], this.vertices[15]],
    ]

    this.colours = [
        "#"+((1<<24)*Math.random()|0).toString(16),
        "#"+((1<<24)*Math.random()|0).toString(16),
        "#"+((1<<24)*Math.random()|0).toString(16),
        "#"+((1<<24)*Math.random()|0).toString(16),
        "#"+((1<<24)*Math.random()|0).toString(16),
        "#"+((1<<24)*Math.random()|0).toString(16),
        "#"+((1<<24)*Math.random()|0).toString(16),
        "#"+((1<<24)*Math.random()|0).toString(16),
        "#"+((1<<24)*Math.random()|0).toString(16),
        "#"+((1<<24)*Math.random()|0).toString(16),
        "#"+((1<<24)*Math.random()|0).toString(16),
        "#"+((1<<24)*Math.random()|0).toString(16),
        "#"+((1<<24)*Math.random()|0).toString(16),
        "#"+((1<<24)*Math.random()|0).toString(16),
        "#"+((1<<24)*Math.random()|0).toString(16),
        "#"+((1<<24)*Math.random()|0).toString(16),
        "#"+((1<<24)*Math.random()|0).toString(16),
        "#"+((1<<24)*Math.random()|0).toString(16),
        "#"+((1<<24)*Math.random()|0).toString(16),
        "#"+((1<<24)*Math.random()|0).toString(16),
        "#"+((1<<24)*Math.random()|0).toString(16),
        "#"+((1<<24)*Math.random()|0).toString(16),
        "#"+((1<<24)*Math.random()|0).toString(16),
        "#"+((1<<24)*Math.random()|0).toString(16),
        "#"+((1<<24)*Math.random()|0).toString(16),
        "#"+((1<<24)*Math.random()|0).toString(16),
        "#"+((1<<24)*Math.random()|0).toString(16),
        "#"+((1<<24)*Math.random()|0).toString(16),
        "#"+((1<<24)*Math.random()|0).toString(16),
        "#"+((1<<24)*Math.random()|0).toString(16),
        "#"+((1<<24)*Math.random()|0).toString(16),
        "#"+((1<<24)*Math.random()|0).toString(16)
    ]


}



function project3d(M){  
    var tempw = 1 / (20 - M.w);
    return new Vertex (M.x*tempw, M.y*tempw, M.w*tempw);
}


//Render Function
/*function render(objects, ctx, dx, dy){

    //Clears last render
    ctx.clearRect(0, 0, 2*dx, 2*dy);

    for(var i =0, numbObjects = objects.length; i < numbObjects; ++i){
        for(var j=0, numbFaces = objects[j].faces.length; j < numbFaces; ++j){
           
            var face = objects[i].faces[j];//gets current face 

            var P = project(face[0]); //P is projection of first vertex
            
            ctx.beginPath();
            ctx.moveTo(P.x + dx, -P.y + dy);//moves pen to projection of first vertex

            for (var k=0, numbVertices = face.length; k < numbVertices; ++k){//draws line to each 2d projection of each vertex to draw face
                P = project(face[k]);
                ctx.lineTo(P.x + dx, -P.y + dy);
            }
           
        
            ctx.closePath();
            ctx.stroke();
            ctx.fill();


        }//Loops through each face in object
    }//Loops through all objects in objects array
}*/

function render(objects, ctx, dx, dy){

    //Clears last render
    ctx.clearRect(0, 0, 2*dx, 2*dy);
    for(var i =0, numbObjects = objects.length; i < numbObjects; ++i){
        
        for(var j=0, numbVertices = objects[i].edges.length; j < numbVertices; ++j){
            //draw each edge

            var edge = objects[i].edges[j];//var to store edge
            var P1 = project(project3d(edge[0]))//var to project edge vertex 1 to 2d
            var P2 = project(project3d(edge[1]))//var to project edge vertex 2 to 2d
            
            ctx.beginPath();
            ctx.moveTo(P1.x + dx, -P1.y + dy);///moves pen to first vertex
            ctx.lineTo(P2.x + dx, -P2.y + dy);///moves pen to second vertex

            ctx.closePath();

            ctx.strokeStyle = objects[i].colours[j];
            ctx.stroke();

        }//Loops through each edge in object
    }//Loops through all objects in objects array
}

//2D projection of 3D point
function project(M){

    var d = 500;
    var r = d / M.y;

    return new Vertex2D(r * M.x, r * M.z);

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
    var w = M.w - center.w;

    
    M.x = ct * x - st * cp * y + st * sp * z + center.x;
    M.y = st * x + ct * cp * y - ct * sp * z + center.y;
    M.z = sp * y + cp * z + center.z;  
}

//Autorates if theres no input
function autoRotate(){
    if(mousedown == false){
        for (var z = 0; z < objects.length; ++z){
            for (var i = 0; i < objects[z].vertices.length; i++){
                rotate(objects[z].vertices[i], tesseract_center, -Math.PI/720, Math.PI/720);
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
                rotate(objects[z].vertices[i], tesseract_center, theta, pi);//Rotates each vertex
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


//canvas setup
var canvas = document.getElementById('myChart'); 
var ctx = canvas.getContext('2d');
ctx.strokeStyle = 'rgba(0, 0, 0, 1)';
ctx.fillStyle = 'rgba(0, 150, 255, 0.3)';
ctx.lineWidth = 3;

//reference center
var dx = canvas.width / 2;
var dy = canvas.height / 2;


var cube_center = new Vertex(0,11*dy/10,0);
var tesseract_center = new Vertex4D(0,11*dy/10,0,0);


var cube1 = new Cube(cube_center, dy);
var cube2 = new Cube(cube_center, dy/2);
var pyramid1 = new Pyramid(cube_center, dy/2, dy);
var pyramid2 = new Pyramid(cube_center, dy/4, dy/2);

var tesseract = new Tessaract(tesseract_center, dy/4);

var objects = [tesseract];

//event setup
canvas.addEventListener('mousedown', initiateMove);
document.addEventListener('mousemove', move);
document.addEventListener('mouseup', stopMove);

var cx = 0;
var cy = 0;

var mousedown = false;

//first render
render(objects, ctx, dx, dy);

setTimeout(autoRotate(objects), 1000);





 






