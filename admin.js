window.onload = () => {
  var socket = io("http://localhost:3000");
  const buttons = document.getElementsByClassName("updateButton");
  const buttonsArray = Array.from(buttons);

  buttonsArray.map((button) =>
    button.addEventListener("click", (e) => {
      const text = "hiciste click mi rey";
      console.log(text);
      socket.send(text);
    }
  ))

  socket.on("message", (data) => {
    console.log("funcino");
    buttons.value = data;
  });
};
