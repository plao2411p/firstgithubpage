const operators = "unindids";
const sets = "UABC";
const stringIn = document.querySelector("#operation");
const button = document.querySelector("#button-1");
const stringOut = document.querySelector("#salida")

button.addEventListener("click", () => {
    const input = stringIn.value;
    const output = stringOut.value;
    alert("Input : " + input)
    alert("Output : " + output)
})
