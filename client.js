
window.onload = () => {
  var socket = io("http://localhost:3000");
  const button = getElement("buttontest");

  button.addEventListener("click", (e) => {
    const text = "hiciste click mi rey";
    console.log(text);
    socket.send(text);
  });

  socket.on("message", (data) => {
    console.log("funcino");
    button.value = data;
  });
};

function getElement(id) {
  return document.getElementById(id);
}
