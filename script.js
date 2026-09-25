/* =====================================================
   NAVBAR ACTIVE LINK
===================================================== */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.forEach(function (item) {

            item.classList.remove("active");

        });

        this.classList.add("active");

    });

});



/* =====================================================
   CHARACTER PROFILE
===================================================== */

function characterInfo(character) {

    const profilePages = {
        "Naruto Uzumaki": "naruto.html",
        "Sasuke Uchiha": "sasuke.html",
        "Sakura Haruno": "sakura.html",
        "Kakashi Hatake": "kakashi.html"
    };

    if (profilePages[character]) {
        window.location.href = profilePages[character];
    }

}



/* =====================================================
   SHOW ALL CHARACTERS
===================================================== */

function showCharacters() {

    alert(
        "MORE NARUTO CHARACTERS\n\n" +
        "Naruto\n" +
        "Sasuke\n" +
        "Sakura\n" +
        "Kakashi\n" +
        "Itachi\n" +
        "Jiraiya\n" +
        "Hinata\n" +
        "Gaara\n" +
        "Madara"
    );

}



/* =====================================================
   SEARCH OPEN
===================================================== */

function openSearch() {

    const overlay =
        document.getElementById("searchOverlay");

    overlay.classList.add("active");

    setTimeout(function () {

        document
            .getElementById("searchInput")
            .focus();

    }, 200);

}



/* =====================================================
   SEARCH CLOSE
===================================================== */

function closeSearch() {

    const overlay =
        document.getElementById("searchOverlay");

    overlay.classList.remove("active");

    document
        .getElementById("searchInput")
        .value = "";

    document
        .getElementById("searchResult")
        .innerText = "";

}



/* =====================================================
   SEARCH CHARACTER
===================================================== */

function searchCharacter() {

    const input =
        document
            .getElementById("searchInput")
            .value
            .trim()
            .toLowerCase();


    const result =
        document.getElementById("searchResult");


    const characters = [

        "naruto",
        "sasuke",
        "sakura",
        "kakashi",
        "itachi",
        "jiraiya",
        "hinata",
        "gaara",
        "madara"

    ];


    if (input === "") {

        result.innerText =
            "Please enter a character name.";

        return;

    }


    const found =
        characters.some(function (character) {

            return character.includes(input);

        });


    if (found) {

        result.innerText =
            "Character found: " + input;

    } else {

        result.innerText =
            "Character not found. Try Naruto, Sasuke, Sakura or Kakashi.";

    }

}



/* =====================================================
   ENTER KEY SEARCH
===================================================== */

const searchInput =
    document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener(
        "keypress",
        function (event) {

            if (event.key === "Enter") {

                searchCharacter();

            }

        }
    );

}



/* =====================================================
   CLOSE SEARCH OUTSIDE
===================================================== */

const searchOverlay =
    document.getElementById("searchOverlay");

if (searchOverlay) {

    searchOverlay.addEventListener(
        "click",
        function (event) {

            if (event.target === this) {

                closeSearch();

            }

        }
    );

}



/* =====================================================
   GALLERY OPEN
===================================================== */

function openGallery(imagePath) {

    const modal =
        document.getElementById("galleryModal");

    const modalImage =
        document.getElementById("galleryModalImage");


    if (!modal || !modalImage) {

        return;

    }


    modalImage.src = imagePath;

    modal.classList.add("active");

}



/* =====================================================
   GALLERY CLOSE
===================================================== */

function closeGallery() {

    const modal =
        document.getElementById("galleryModal");

    const modalImage =
        document.getElementById("galleryModalImage");


    if (modal) {

        modal.classList.remove("active");

    }


    if (modalImage) {

        modalImage.src = "";

    }

}



/* =====================================================
   CLOSE GALLERY OUTSIDE IMAGE
===================================================== */

const galleryModal =
    document.getElementById("galleryModal");

if (galleryModal) {

    galleryModal.addEventListener(
        "click",
        function (event) {

            if (event.target === this) {

                closeGallery();

            }

        }
    );

}



/* =====================================================
   ESC KEY
===================================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeGallery();

            closeSearch();

        }

    }
);



/* =====================================================
   BOOTSTRAP AUTOMATIC SLIDER
===================================================== */

const narutoSlider =
    document.getElementById("narutoSlider");


if (narutoSlider) {

    const carousel =
        bootstrap.Carousel.getOrCreateInstance(
            narutoSlider,
            {
                interval: 4000,
                ride: "carousel",
                pause: false,
                touch: true
            }
        );


    carousel.cycle();

}