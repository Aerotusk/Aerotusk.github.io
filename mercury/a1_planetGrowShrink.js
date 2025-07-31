// const animationDuration = 40;
// const animationShift = 10;
// const animationRate = 10;

const t_resizeAmount = 0.1;
const t_planetSize = 40;

const numRows = 10;
const numCols = 10;
const gridSize = 48;
const margTop = 0;
const margBot = 0;
const margLeft = 2;
const margRight = 2;

let t_planetStep = Array(numRows) // 10x10 array. Was originally Array(10).fill(Array(10).fill(0)), but THAT leaves each row as an identical (in memory) array!
for (let i = 0; i < numRows; i++)
{
    t_planetStep[i] = Array(numCols).fill(0);
}

function populatePlanets() // This is to hopefully negate the need for a table. But hey, if I can get the table working, then that's great!
{
    // Make a 10x10 array of planets using a-j, 0-9 notation as their names
    // a-j denotes latency
    // 0-9 denotes speed
    for (let r = 0; r < numRows ; r++) // Row For Loop
    {
        for (let c = 0; c < numCols ; c++) // Column For Loop
        {
            var xLoc = c * gridSize + t_planetSize / 2;
            var yLoc = r * gridSize + t_planetSize / 2;
            let planetID = r.toString() + c.toString() + "DIV";
            var testBox = document.getElementById("planetGrowShrinkDiv")
            testBox.innerHTML += `<img onmouseenter=\"planetResizeTest('${planetID}')\" class=\"testPlanet\" id=\"${planetID}Obj\" src=\"../images/planets/Mercury.png\" style=\"height:${t_planetSize}px; width:${t_planetSize}px; transform:translate(${xLoc}px, ${yLoc}px);\"></img>`;
        }
    }
}

function planetResizeTest(planet)
{
    let row = parseInt(planet[0]);
    let col = parseInt(planet[1]);
    let stepRow = t_planetStep[row];
    let step = stepRow[col];

    let animationRate = 3 * row + 2;
    let animationShift = 80 - (3 * col);
    let animationDuration = 80
    
    let id = null;
    clearInterval(id);
    id = setInterval(plAnimate,15); // Frame period, in ms

    var originalWidth = 40;
    var originalHeight = 40;
    let obj = planet+"Obj"
    var element = document.getElementById(obj);
    function plAnimate()
    {
        if(t_planetStep[row][col] != step) // If the animation is still playing:
        {
            let width = originalWidth * (1 + t_resizeAmount * (logistic_test(step + animationShift,animationRate,animationDuration)));
            let height = originalHeight * (1 + t_resizeAmount * (logistic_test(step + animationShift,animationRate,animationDuration)));

            var xLoc = col * gridSize + t_planetSize / 2;
            var yLoc = row * gridSize + t_planetSize / 2;

            let xCoord = xLoc + (originalWidth / 2) - (width / 2);
            let yCoord = yLoc + (originalWidth / 2) - (height / 2);


            document.getElementById(obj).style.width = width + 'px';
            document.getElementById(obj).style.height = height + 'px';
            document.getElementById(obj).style.transform = 'translate('+ xCoord + 'px, ' + yCoord + 'px)';
            let marginChange = -(width - t_planetSize) / 2;
            document.getElementById(obj).style.marginTop = margTop + marginChange; 
            document.getElementById(obj).style.marginBottom = margBot + marginChange;
            document.getElementById(obj).style.marginLeft = margLeft + marginChange;
            document.getElementById(obj).style.marginRight = margRight + marginChange;
            t_planetStep[row][col] = step;
        }

        if(element.matches(':hover')){ // If mouse is still over the planet:
            if(step < (animationDuration * 2) - animationShift) {
                step++;
            }
        } else {
            if(step > 0) {
                step--;
            } else {
                clearInterval(id);
            }
        }
    }
}

// HELPER FUNCTIONS
function logistic_test(time,rate,dur)
{
    return 1 / (1 + Math.exp(-rate * ((time/dur)-1)))
}