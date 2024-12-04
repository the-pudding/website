export default function checkScreenMode() {
    // Check the current color scheme
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
    // Return the appropriate theme
    return prefersDarkMode ? "dark" : "light";
}