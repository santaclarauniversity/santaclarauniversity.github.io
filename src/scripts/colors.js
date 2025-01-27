let color_data = {}
function parseData() {
  fetch('/src/data/brandcolors.json')
    .then(response => response.json())
    .then(data => {
      // Do something with the JSON data
      color_data = data;
      populateColors();
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

parseData();
copyButtons();
