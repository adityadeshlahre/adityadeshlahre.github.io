const setTheme = (theme) => {
  document.documentElement.className = theme;
  localStorage.setItem("theme", theme);
};

const hasCodeRun = localStorage.getItem("hasCodeRun");

if (!hasCodeRun) {
  const defaultTheme = "{{ config.extra.default_theme }}";
  setTheme(defaultTheme);
  localStorage.setItem("hasCodeRun", "true");
}

const getTheme = () => {
  const theme = localStorage.getItem("theme");
  if (theme) {
    setTheme(theme);
  }
};

getTheme();

// WASTE JS IT IS

document.addEventListener("DOMContentLoaded", function () {
  var clickSound = document.getElementById("clickSound");
  document.addEventListener("click", function () {
    clickSound.play();
  });
});
