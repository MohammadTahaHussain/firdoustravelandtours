window.addEventListener("scroll", function () {
    var sections = document.querySelectorAll("section");
    var navLinks = document.querySelectorAll("nav ul li a");

    sections.forEach(function (section, index) {
        var top = section.offsetTop;
        var height = section.offsetHeight;
        var offset = window.pageYOffset + 120;
        var id = section.getAttribute("id");

        if (offset >= top && offset < top + height) {
            // navLinks[index].style.color = "rgb(29, 78, 216)";
            navLinks[index].classList.add("block")
            navLinks[index].classList.add("py-2")
            navLinks[index].classList.add("pl-3")
            navLinks[index].classList.add("pr-4")
            navLinks[index].classList.add("text-white")
            navLinks[index].classList.add("bg-blue-700")
            navLinks[index].classList.add("rounded")
            navLinks[index].classList.add("md:bg-transparent")
            navLinks[index].classList.add("md:text-blue-700")
            navLinks[index].classList.add("md:p-0")
            navLinks[index].classList.add("dark:text-white")
            navLinks[index].classList.add("md:dark:text-blue-500")
        } else {
            while (navLinks[index].classList.length > 0) {
                navLinks[index].classList.remove(navLinks[index].classList.item(0));
              }
            navLinks[index].classList.add("block")
            navLinks[index].classList.add("py-2")
            navLinks[index].classList.add("pl-3")
            navLinks[index].classList.add("pr-4")
            navLinks[index].classList.add("text-gray-500")
            navLinks[index].classList.add("hover:bg-gray-100")
            navLinks[index].classList.add("md:hover:bg-transparent")
            navLinks[index].classList.add("md:border-0")
            navLinks[index].classList.add("md:hover:text-blue-700")
            navLinks[index].classList.add("md:p-0")
            navLinks[index].classList.add("dark:text-white")
            navLinks[index].classList.add("md:dark:hover:text-blue-500")
            navLinks[index].classList.add("dark:hover:bg-gray-700")
            navLinks[index].classList.add("dark:hover:text-white")
            navLinks[index].classList.add("md:dark:hover:bg-transparent")
        }
    });
});