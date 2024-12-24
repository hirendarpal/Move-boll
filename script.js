const Page1 = document.querySelector(".page1");
const movebox = document.querySelectorAll("#movebox");

Page1.addEventListener("mousemove", (dets) => {
    movebox.forEach((item) => {
        item.style.left = dets.x + "px";
        item.style.top = dets.y + "px";
    })
})
