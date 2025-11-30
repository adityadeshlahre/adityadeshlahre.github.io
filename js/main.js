function copyToClipboard() {
  const text = document.getElementById("copyTarget").innerText;
  navigator.clipboard.writeText(text);
  alert("Copied!");
}
