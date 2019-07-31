console.log('Homework 3');

var myslider = document.getElementById('myslider');
var myoutput = document.getElementById('myoutput');
myoutput.innerHTML = myslider.value; // Display the default slider value

// update the current slider value (each time you drag the slider handle)
myslider.oninput = function () {
    myoutput.innerHTML = this.value;
}

var mymain = document.getElementById('mymain');

// clear main
function clearDivs() {
    mymain.innerHTML = null;
}

// generate divs on click in main
function generateDivs() {
    // clear main before doing anything
    clearDivs();

    var mysliderValue = myslider.value;
    var myFizzValue = document.getElementById('myfizz').value;
    var myBuzzValue = document.getElementById('mybuzz').value;

    var mydivs = [];
    for (var i = 1; i <= mysliderValue; i++) {
        var mydiv = document.createElement('div');

        // set id
        mydiv.id = 'myid' + i;

        // set color and text
        if (i % myFizzValue === 0 && i % myBuzzValue === 0) {
            mydiv.className = 'coral';
            mydiv.innerText = 'FizzBuzz';
        } else if (i % myFizzValue === 0) {
            mydiv.className = 'violet';
            mydiv.innerText = 'Fizz';
        } else if (i % myBuzzValue === 0) {
            mydiv.className = 'green';
            mydiv.innerText = 'Buzz';
        } else {
            mydiv.className = 'yellow';
            mydiv.innerText = i;
        }

        mydivs.push(mydiv);

        // 1 row with 6 columns
        // if (i % 10 === 0) {
        //     addNewRow(mydivs);
        //     // reset mydivs array
        //     mydivs = [];
        // }
    }

    // add remaining rows if any
    addNewRow(mydivs);
}

function addNewRow(mydivs) {
    var mycolumns = [];
    for (var j = 0; j < mydivs.length; j++) {
        var mycolumn = document.createElement('div');
        mycolumn.className = 'col';

        // add each div block to column
        mycolumn.appendChild(mydivs[j]);
        mycolumns.push(mycolumn);
    }
    var myrow = document.createElement('div');
    myrow.className = 'row';

    for (var k = 0; k < mycolumns.length; k++) {
        // add each column to row
        myrow.appendChild(mycolumns[k]);
    }

    // add row to main
    mymain.appendChild(myrow);
}
