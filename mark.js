document.querySelectorAll("[class^='Story__FeatureOverlay']").forEach((e) => {
    // e.parentElement.parentElement.parentElement.parentElement.remove();
    e.children[0].children[0].innerHTML = "<strong style = 'color:white; text-shadow: -1px 0 red, 0 1px red, 1px 0 red, 0 -1px red;'>paska mobiiliuutinen</strong> | " + e.children[0].children[0].innerHTML;
});
