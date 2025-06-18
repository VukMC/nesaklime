const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".header__imagee img", {
    ...scrollRevealOption,
    origin: "left",
});
ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    delay: 200,
});
ScrollReveal().reveal(".header__content p", {
    ...scrollRevealOption,
    delay: 400,
});
ScrollReveal().reveal(".featurette h2", {
    ...scrollRevealOption,
    delay: 200,
});
ScrollReveal().reveal(".featurette li", {
    ...scrollRevealOption,
    delay: 400,
});
ScrollReveal().reveal(".katalog_2", {
    ...scrollRevealOption,
    delay: 400,
})
