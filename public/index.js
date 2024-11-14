function changeBackgroundColor() {
  document.body.style.backgroundColor = `hsl(${Math.floor(Math.random() * 360)}, 100%, 80%)`;
  setTimeout(changeBackgroundColor, Math.random() * 1000);
}

changeBackgroundColor();