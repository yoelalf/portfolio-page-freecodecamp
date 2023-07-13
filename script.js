const navigation = document.querySelector("#navbar")
const navigationHeight = navigation.offsetHeight - 1;
document.documentElement.style.setProperty(
    "--scroll-padding",
    navigationHeight + "px"
);



