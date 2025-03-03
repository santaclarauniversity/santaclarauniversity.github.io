let color_data = {}
function parseData() {
  fetch('/src/data/brandcolors.json')
    .then(response => response.json())
    .then(data => {
      // Do something with the JSON data
      color_data = data;
      populateColors();

      populateBackgroundColorButtons();
    })
    .catch(error => {
      console.error('Error:', error);
    });

}

function populateColors() {
  let color_chips = document.querySelectorAll(".color-chip");
  let color_chip_name = document.querySelectorAll(".color-chip__name");
  let color_chip_data = document.querySelectorAll(".color-chip__data");
  let copy_color_buttons = document.querySelectorAll(".color-copy-button-container");


  let primary = color_data["primary"];
  let i = 0;

  let secondary = color_data["secondary"];
  let tertiary = color_data["tertiary"];

  // background color
  for (const [color, details] of Object.entries(primary)) {
    color_chips[i].style.backgroundColor = details["HEX"];
    color_chip_name[i].style.color = details["text-hex"];
    color_chip_data[i].style.color = details["text-hex"];
    copy_color_buttons[i].style.color = details["text-hex"];
    appendData(color_chip_data[i], details, true);
    i++;
  }

  for (const [color, details] of Object.entries(secondary).concat(Object.entries(tertiary))) {
    color_chips[i].style.backgroundColor = details["HEX"];
    color_chip_name[i].style.color = details["text-hex"];
    color_chip_data[i].style.color = details["text-hex"];
    copy_color_buttons[i].style.color = details["text-hex"];
    appendData(color_chip_data[i], details, false);
    i++;
    color_chips[i].style.backgroundColor = details["variants"]["Light"]["HEX"];
    color_chip_name[i].style.color = details["variants"]["Light"]["text-hex"];
    color_chip_data[i].style.color = details["variants"]["Light"]["text-hex"];
    copy_color_buttons[i].style.color = details["variants"]["Light"]["text-hex"];
    appendData(color_chip_data[i], details["variants"]["Light"], false);
    i++;
    color_chips[i].style.backgroundColor = details["variants"]["Dark"]["HEX"];
    color_chip_name[i].style.color = details["variants"]["Dark"]["text-hex"];
    color_chip_data[i].style.color = details["variants"]["Dark"]["text-hex"];
    copy_color_buttons[i].style.color = details["variants"]["Dark"]["text-hex"];
    appendData(color_chip_data[i], details["variants"]["Dark"], false);
    i++;
  }
}

function appendData(parent_element, details, is_primary) {
  if(is_primary) {
    let p_pms = document.createElement('p');
    if (details["PMS"] !== -1) {
      p_pms.innerHTML = "<b>PMS</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + details["PMS"] + " C";
      parent_element.appendChild(p_pms);
    }
  }

  let p_cmyk = document.createElement('p');
  p_cmyk.innerHTML = "<b>CMYK</b>&nbsp;&nbsp;&nbsp;&nbsp;"
  for(let i = 0; i < details["CMYK"].length; i++) {
    if(i !== details["CMYK"].length - 1) {
      p_cmyk.innerHTML += details["CMYK"][i] + " / ";
    } else {
      p_cmyk.innerHTML += details["CMYK"][i];
    }
  }

  let p_rgb = document.createElement('p');
  p_rgb.innerHTML = "<b>RGB</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
  for(let i = 0; i < details["RGB"].length; i++) {
    if(i !== details["RGB"].length - 1) {
      p_rgb.innerHTML += details["RGB"][i] + " / ";
    } else {
      p_rgb.innerHTML += details["RGB"][i];
    }
  }

  let p_hex = document.createElement('p');
  p_hex.innerHTML = `<b>HEX</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&thinsp;${details["HEX"]}`;

  parent_element.appendChild(p_cmyk);
  parent_element.appendChild(p_rgb);
  parent_element.appendChild(p_hex);
}

function copyButtons() {
  let copy_color_buttons = document.querySelectorAll(".color-copy-button-container");
  for (let i = 0; i < copy_color_buttons.length; i++) {
    copy_color_buttons[i].addEventListener("click", function(e) {
      let p_hex = e.srcElement.parentElement.parentElement.querySelector('.color-chip__data p:nth-last-child(1)');
      let hex_code = p_hex.textContent.split('HEX')[1].trim();

      navigator.clipboard.writeText(hex_code).then(() => {
        // Create the popup element
        let popup = document.createElement("div");
        popup.textContent = `Copied ${hex_code} to clipboard!`;
        popup.style.position = "fixed";
        popup.style.bottom = "20px";
        popup.style.left = "50%";
        popup.style.transform = "translateX(-50%)";
        popup.style.backgroundColor = "#333";
        popup.style.color = "#fff";
        popup.style.padding = "10px 20px";
        popup.style.borderRadius = "8px";
        popup.style.zIndex = "1000";
        popup.style.opacity = "0";
        popup.style.transition = "opacity 0.3s ease";

        document.body.appendChild(popup);

        setTimeout(() => {
          popup.style.opacity = "1";
        }, 10);

        setTimeout(() => {
          popup.style.opacity = "0";
          setTimeout(() => popup.remove(), 300);
        }, 1000);
      });
    });

    copy_color_buttons[i].addEventListener("mouseenter", function(e) {
      let originalBackground = window.getComputedStyle(e.target).backgroundColor;
      let originalColor = window.getComputedStyle(e.target).color;
      e.target.dataset.originalBackground = originalBackground;
      e.target.dataset.originalColor = originalColor;

      let newBackground = originalColor; // Use the text color as the background
      let p_hex = e.srcElement.parentElement.parentElement.querySelector('.color-chip__data p:nth-last-child(1)');
      let text = p_hex.textContent.split('HEX')[1].trim();

      e.target.style.background = newBackground;
      e.target.style.color = text;
    });

    copy_color_buttons[i].addEventListener("mouseleave", function(e) {
      // Revert to the original styles stored in dataset
      e.target.style.background = e.target.dataset.originalBackground || "none";
      e.target.style.color = e.target.dataset.originalColor || "inherit";
    });

  }
}

/* taken from https://www.w3.org/TR/WCAG20/#relativeluminancedef */
function getLuminance(red, green, blue) {
  let r_rgb = red / 255;
  let g_rgb = green / 255;
  let b_rgb = blue / 255;

  let r = 0;
  let b = 0;
  let g = 0;

  if(r_rgb <= 0.03928) {
    r = r_rgb / 12.92;
  } else {
    r = Math.pow(((r_rgb + 0.055) / 1.055), 2.4);
  }

  if(g_rgb <= 0.03928) {
    g = g_rgb / 12.92;
  } else {
    g = Math.pow(((g_rgb + 0.055) / 1.055), 2.4);
  }

  if(b_rgb <= 0.03928) {
    b = b_rgb / 12.92;
  } else {
    b = Math.pow(((b_rgb + 0.055) / 1.055), 2.4);
  }

  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/* The visual presentation of text and images of text has a contrast ratio of at least 4.5:1.
Large-scale text and images of large-scale text have a contrast ratio of at least 3:1; */
function getContrastRatio(luminance_text, luminance_bg) {
  let text_on_bg = (luminance_text + 0.05) / (luminance_bg + 0.05);
  let bg_on_text = (luminance_bg + 0.05) / (luminance_text + 0.05);

  return Math.round(Math.max(text_on_bg, bg_on_text) * 100) / 100;
}

// creates buttons for selection for the color contrast tool
function populateBackgroundColorButtons() {
  let bgSelector = document.querySelectorAll(".color-selector.background-colors")[0];

  let primary = color_data["primary"];
  let secondary = color_data["secondary"];
  let tertiary = color_data["tertiary"];

  for (const [color, details] of Object.entries(primary)) {
    let hex_code = details["HEX"];
    appendColorButton(bgSelector, hex_code, color);
  }

  for (const [color, details] of Object.entries(secondary).concat(Object.entries(tertiary))) {
    let hex_code = details["HEX"];
    appendColorButton(bgSelector, hex_code, color);

    let light_hex_code = details["variants"]["Light"]["HEX"];
    appendColorButton(bgSelector, light_hex_code, color + " Light");

    let dark_hex_code = details["variants"]["Dark"]["HEX"];
    appendColorButton(bgSelector, dark_hex_code, color + " Dark");
  }

  activateBgColorButtons();
}

function populateTextColorButtons(selected_hex_code) {
  let textSelector = document.querySelectorAll(".color-selector.text-colors")[0];

  // clear all children
  textSelector.innerHTML = '';

  let primary = color_data["primary"];
  let secondary = color_data["secondary"];
  let tertiary = color_data["tertiary"];

  const s = hexToRgb(selected_hex_code);

  for (const [color, details] of Object.entries(primary)) {
    let hex_code = details["HEX"];
    let curr = hexToRgb(hex_code);

    let ratio = getContrastRatio(getLuminance(curr[0], curr[1], curr[2]), getLuminance(s[0], s[1], s[2]));
    if(ratio >= 3.5) {
      appendColorButton(textSelector, hex_code, color, ratio);
    }
  }

  for (const [color, details] of Object.entries(secondary).concat(Object.entries(tertiary))) {
    let hex_code = details["HEX"];
    let curr = hexToRgb(hex_code);
    let ratio = getContrastRatio(getLuminance(curr[0], curr[1], curr[2]), getLuminance(s[0], s[1], s[2]));
    if(ratio >= 3.5) {
      appendColorButton(textSelector, hex_code, color, ratio);
    }

    let light_hex_code = details["variants"]["Light"]["HEX"];
    let curr_light = hexToRgb(light_hex_code);

    let ratio_light = getContrastRatio(getLuminance(curr_light[0], curr_light[1], curr_light[2]), getLuminance(s[0], s[1], s[2]));

    if(ratio_light >= 3.5) {
      appendColorButton(textSelector, light_hex_code, color + " Light", ratio_light);
    }

    let dark_hex_code = details["variants"]["Dark"]["HEX"];
    let curr_dark = hexToRgb(dark_hex_code);

    let ratio_dark = getContrastRatio(getLuminance(curr_dark[0], curr_dark[1], curr_dark[2]), getLuminance(s[0], s[1], s[2]));

    if(ratio_dark >= 3.5) {
      appendColorButton(textSelector, dark_hex_code, color + " Dark", ratio_dark);
    }
  }
}

function hexToRgb(hex) {
  hex = hex.replace(/^#/, '');

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return [r, g, b];
}

function activateBgColorButtons() {
  let bg_color_circles = document.querySelectorAll(".background-colors .color-circle");
  let sandbox = document.querySelectorAll(".sandbox")[0];

  // make the first one default selected
  if(bg_color_circles[0]) {
    bg_color_circles[0].classList.add("selected");
    populateTextColorButtons(bg_color_circles[0].parentElement.querySelectorAll(".hex-code")[0].textContent);
    activateTextColorButtons();
    sandbox.style.backgroundColor = bg_color_circles[0].parentElement.querySelectorAll(".hex-code")[0].textContent;

  }

  for (let i = 0; i < bg_color_circles.length; i++) {
    bg_color_circles[i].addEventListener("click", function(e) {
      removeSelect(bg_color_circles);
      e.target.classList.add("selected");
      populateTextColorButtons(e.target.parentElement.querySelectorAll(".hex-code")[0].textContent);
      activateTextColorButtons();
      sandbox.style.backgroundColor = e.target.parentElement.querySelectorAll(".hex-code")[0].textContent;
    });

    bg_color_circles[i].addEventListener("keydown", function(e) {
      if(e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        removeSelect(bg_color_circles);
        e.target.classList.add("selected");
        populateTextColorButtons(e.target.parentElement.querySelectorAll(".hex-code")[0].textContent);
        activateTextColorButtons();
        sandbox.style.backgroundColor = e.target.parentElement.querySelectorAll(".hex-code")[0].textContent;
      }
    });
  }


}

function activateTextColorButtons() {
  let text_color_circles = document.querySelectorAll(".text-colors .color-circle");
  let sandbox = document.querySelectorAll(".sandbox")[0];
  let contrast_info = document.querySelectorAll(".color-contrast")[0];

  // make the first one default selected
  if(text_color_circles[0]) {
    text_color_circles[0].classList.add("selected");
    sandbox.style.color = text_color_circles[0].parentElement.querySelectorAll(".hex-code")[0].textContent;

    let contrast_ratio = text_color_circles[0].parentElement.getAttribute('data-ratio');
    contrast_info.textContent = contrast_ratio + ":1";
    setPassFail(contrast_ratio);
  }

  for (let i = 0; i < text_color_circles.length; i++) {
    text_color_circles[i].addEventListener("click", function(e) {
      removeSelect(text_color_circles);
      e.target.classList.add("selected");
      sandbox.style.color = e.target.parentElement.querySelectorAll(".hex-code")[0].textContent;
      let contrast_ratio = e.target.parentElement.getAttribute('data-ratio');
      contrast_info.textContent = contrast_ratio + ":1";
      setPassFail(contrast_ratio);
    });

    text_color_circles[i].addEventListener("keydown", function(e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        removeSelect(text_color_circles);
        e.target.classList.add("selected");
        sandbox.style.color = e.target.parentElement.querySelectorAll(".hex-code")[0].textContent;
        let contrast_ratio = e.target.parentElement.getAttribute('data-ratio');
        contrast_info.textContent = contrast_ratio + ":1";
        setPassFail(contrast_ratio);
      }
    });
  }
}

function setPassFail(contrast_value) {
  let value = parseFloat(contrast_value);

  let aa_large = document.getElementById("aa-large");
  let aaa_large = document.getElementById("aaa-large");
  let aa_normal = document.getElementById("aa-normal");
  let aaa_normal = document.getElementById("aaa-normal");

  // aa_large
  if(value >= 3) {
    aa_large.textContent = "Pass";
    setPassClass(aa_large);
  } else {
    aa_large.textContent = "Fail";
    setFailClass(aa_large);
  }

  // aaa_large
  if(value >= 4.5) {
    aaa_large.textContent = "Pass";
    setPassClass(aaa_large);
  } else {
    aaa_large.textContent = "Fail";
    setFailClass(aaa_large);
  }

  // aa_normal
  if(value >= 4.5) {
    aa_normal.textContent = "Pass";
    setPassClass(aa_normal);
  } else {
    aa_normal.textContent = "Fail";
    setFailClass(aa_normal);
  }

  // aaa_normal
  if(value >= 7) {
    aaa_normal.textContent = "Pass";
    setPassClass(aaa_normal);
  } else {
    aaa_normal.textContent = "Fail";
    setFailClass(aaa_normal);
  }
}

function setPassClass(e) {
  e.classList.remove("fail");
  e.classList.add("pass");
}

function setFailClass(e) {
  e.classList.remove("pass");
  e.classList.add("fail");
}

function removeSelect(color_circles) {
  for(let i= 0; i < color_circles.length; i++) {
    if(color_circles[i].classList.contains("selected")) {
      color_circles[i].classList.remove("selected");
    }
  }
}

function appendColorButton(parent_element, hex_code, color_name, ratio) {
  const colorButton = document.createElement("div");
  colorButton.className = "color-button";

  const colorCircle = document.createElement("div");
  colorCircle.className = "color-circle";
  colorCircle.style.backgroundColor = hex_code;

  if(hex_code === "#FFFFFF") {
    colorCircle.style.border = "1px solid lightgray";
  }

  colorCircle.tabIndex = 0;

  const hexCode = document.createElement("div");
  hexCode.className = "hex-code";
  hexCode.textContent = hex_code;

  const tooltip = document.createElement("span");
  tooltip.className = "color-tip";
  tooltip.textContent = color_name;


  colorButton.appendChild(colorCircle);
  colorButton.appendChild(hexCode);
  colorButton.appendChild(tooltip);

  parent_element.appendChild(colorButton);

  if(ratio) {
    colorButton.dataset.ratio = ratio;
  }
}

parseData();
copyButtons();
