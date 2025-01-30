document.getElementById("mernbtn").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("courseModal").style.display = "flex";
});

document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("courseModal").style.display = "none";
});

window.onclick = function(event) {
    if (event.target === document.getElementById("courseModal")) {
        document.getElementById("courseModal").style.display = "none";
    }
};