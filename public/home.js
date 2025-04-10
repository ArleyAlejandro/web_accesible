document.addEventListener("DOMContentLoaded", function () {
    const iconMenu = document.querySelector(".icon-menu");
    const iconContrast = document.querySelector(".icon-contrast");
    const nav = document.getElementById("nav");
    const root = document.documentElement;
    const orangeCircle = document.getElementById("orange-circle");
    const temaGuardado = localStorage.getItem("tema") || "light";

    // Aplica el tema guardado al cargar la página
    root.classList.add(temaGuardado);
    if (temaGuardado === "dark") {
        orangeCircle.src = "imágenes/Eye_O2.png"; // Cambiar a la imagen de modo oscuro
    } else {
        orangeCircle.src = "imágenes/Eye_O.png"; // Imagen para modo claro
    }

    // Alternar visibilidad del menú
    iconMenu.addEventListener("click", function () {
        nav.classList.toggle("visible");
    });

    // Alternar entre modo claro (light) y oscuro (dark) y guardar la preferencia
    iconContrast.addEventListener("click", function () {
        if (root.classList.contains("light")) {
            root.classList.remove("light");
            root.classList.add("dark");
            orangeCircle.src = "imágenes/Eye_O2.png";
            localStorage.setItem("tema", "dark");
        } else {
            root.classList.remove("dark");
            root.classList.add("light");
            orangeCircle.src = "imágenes/Eye_O.png";
            localStorage.setItem("tema", "light");
        }
    });
});

