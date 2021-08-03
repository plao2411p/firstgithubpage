var { PythonShell } = require('python-shell');

PythonShell.run('./py/he.py', null, function (err, results) {
    if (err) throw err;
    console.log(results.slice(0));
});

function getstrin() {
    let x = document.getElementById("operation").value;
    alert(typeof (x))
    document.getElementById("salida").innerHTML = x;

}
