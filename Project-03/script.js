window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById("root");
  const btn = document.getElementById("change-btn");
  const copyBtn = document.getElementById("copy-btn");
  const output = document.getElementById("output");

  btn.addEventListener("click", function () {
    const bgColor = hexColor();
    root.style.backgroundColor = bgColor;
    output.value = bgColor;
  });

  copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(output.value);
  });
}

function hexColor() {
  const green = Math.floor(Math.random() * 255);
  const red = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `#${green.toString(16)}${red.toString(16)}${blue.toString(16)}`;
}
