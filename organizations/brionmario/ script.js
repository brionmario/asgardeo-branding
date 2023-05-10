/* Properties of the dark theme. */
const DARK_THEME = {
    "asg-primary-background-color": "#010409",
    "asg-primary-text-color": "#c9d1d9",
    "asg-heading-text-color": "#c9d1d9",
    "asg-login-box-background-color": "#0d1117",
    "asg-login-box-border-color": "#30363d",
    "asg-input-field-base-text-color": "#ffffff",
    "asg-input-field-base-background-color": "#010409",
    "asg-input-field-base-label-text-color": "#c9d1d9",
    "asg-input-field-base-border-color": "#30363d",
    "asg-external-login-button-base-background-color": "#00000059",
    "asg-external-login-button-base-text-color": "#c9d1d9",
    "fp-header-background-color": "#161b22",
    "fp-divider-color": "#30363d",
    "fp-warning-background-color": "#ffcf802e",
    "fp-copy-btn-background-color": "#30363d",
    "fp-copy-btn-text-color": "#010409"
}

/* Properties of the light theme. */
const LIGHT_THEME = {
    "asg-primary-background-color": "#ffffff",
    "asg-primary-text-color": "rgba(0,0,0,.87)",
    "asg-heading-text-color": "rgba(0,0,0,.87)",
    "asg-login-box-background-color": "#ffffff",
    "asg-login-box-border-color": "rgba(34,36,38,.15)",
    "asg-input-field-base-text-color": "rgba(0,0,0,.87)",
    "asg-input-field-base-background-color": "#ffffff",
    "asg-input-field-base-label-text-color": "rgba(0,0,0,.87)",
    "asg-input-field-base-border-color": "rgba(34,36,38,.15)",
    "asg-external-login-button-base-background-color": "#0000000a",
    "asg-external-login-button-base-text-color": "#000000de",
    "fp-header-background-color": "#f2f2f2",
    "fp-divider-color": "rgba(34,36,38,.15)",
    "fp-warning-background-color": "#fff6e7",
    "fp-copy-btn-background-color": "#e0e1e2",
    "fp-copy-btn-text-color": "rgba(0,0,0,.6)"
}

/* Get the theme checkbox element. */
const themChangeCheckbox = document.getElementById("fp-checkbox");

/* Check the previously stored theme and activate. */
const storedTheme = localStorage.getItem("food_paradise_theme");

if (storedTheme === "LIGHT") {
    themChangeCheckbox.checked = true;
    setTheme(LIGHT_THEME);
    changePoweredByLogo("LIGHT");
} else if (storedTheme === "DARK") {
    themChangeCheckbox.checked = false;
    setTheme(DARK_THEME);
    changePoweredByLogo("DARK");
} else {
    themChangeCheckbox.checked = true;
    setTheme(LIGHT_THEME);
    changePoweredByLogo("LIGHT");
}

/* Create event listner for checkbox element. */
themChangeCheckbox.addEventListener("change", function(e) {
    const checked = e.target.checked;

    if (checked) {
        localStorage.setItem("food_paradise_theme", "LIGHT");
        setTheme(LIGHT_THEME);
        changePoweredByLogo("LIGHT");
    } else {
        localStorage.setItem("food_paradise_theme", "DARK");
        setTheme(DARK_THEME);
        changePoweredByLogo("DARK");
    }
});

/* Function for set the properties of theme object into styles. */
function setTheme(themValueObj) {
    for (const key in themValueObj) {
        document.documentElement.style.setProperty(`--${key}`, themValueObj[key]);
    }
}

// This will be removed after introducing the subscription API
function changePoweredByLogo(theme) {
    const poweredByLogo = document.getElementsByClassName("powered-by-logo")[0];
    const imgElement = poweredByLogo.firstElementChild;
    const currentSrc = imgElement.src;

    if (theme === "LIGHT") {
        if (currentSrc.search("asgardeo-logo.svg") === -1) {
            imgElement.src = currentSrc.replace("asgardeo-logo-white.svg", "asgardeo-logo.svg");
        }
    } else {
        if (currentSrc.search("asgardeo-logo-white.svg") === -1) {
            imgElement.src = currentSrc.replace("asgardeo-logo.svg", "asgardeo-logo-white.svg");
        }
    }
}
