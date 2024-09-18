function myFunction(e) {
    switch (e.value) {
        case "child":
            window.location.href = "child.html";
            break;
        case "men":
            window.location.href = "index.html";

            break;
        case "women":
            window.location.href = "women.html";
            break;
        default:
            window.location.href = "index.html";
    }
}