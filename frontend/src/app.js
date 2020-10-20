import HomeScreen from "./screens/HomeScreen.js";

const router = async () => {
    const main = document.getElementById("main-container");
    main.innerHTML = HomeScreen.render();
};
window.addEventListener('load', router);