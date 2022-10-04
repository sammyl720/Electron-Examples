const toggleDarkModeBtn = document.getElementById('toggle-dark-mode');
const resetToSystemBtn = document.getElementById('reset-to-system');
const themeSourceOutput = document.getElementById('theme-source')

toggleDarkModeBtn.addEventListener('click', async (e) => {
  const isDarkMode = await darkMode.toggle();
  themeSourceOutput.innerHTML = isDarkMode ? 'Dark' : 'Light';
})
resetToSystemBtn.addEventListener('click', async (e) => {
  await darkMode.system();
  themeSourceOutput.innerHTML = 'System'
})