/*
 *  Triage interface built with Javascript
 *  Copyright (C) 2020  Cláudio Ricardo Torres W. F.
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import {createTemperatureChart, createPressureChart, createOxigenationChart,
        createHeartRateChart} from "./charts.js";

function loadPage(container) {
  loadHome(container);
//  loadMenu(container);
//  loadAbout(container);
  loadContact(container);
}

function loadHome(container) {
  const home = document.createElement("div");
  const headline = document.createElement("h1");
  const overContainer = document.createElement("div");
  const chartContainer = document.createElement("div");

  home.id = "home";
  home.className = "option";
  home.style.display = "block";
  home.style.n = "center";

  headline.textContent = "Interface de Triagem";

  chartContainer.style.width = "90%";
  chartContainer.style.marginLeft = "auto";
  chartContainer.style.marginRight = "auto";
  chartContainer.style.display = "grid";
  if (screen.width < 1000 || screen.width < screen.height) {
    chartContainer.style.gridTemplateColumns = "repeat(auto-fit, minmax(200px, 1fr)";
  } else {
    chartContainer.style.gridTemplateColumns = "repeat(auto-fit, minmax(500px, 1fr)";
  }

  createTemperatureChart(chartContainer, "Temperatura (°C)");
  createPressureChart(chartContainer, "Pressão (mmHg)");
  createOxigenationChart(chartContainer, "Oxigenação (%)");
  createHeartRateChart(chartContainer, "Frequência Cardíaca (bpm)");

  home.appendChild(headline);
  home.appendChild(chartContainer);
  home.appendChild(document.createElement("p"));
  container.appendChild(home);
}

function loadMenu(container) {
  const menu = document.createElement("div");

  menu.id = "menu";
  menu.className = "option";
  menu.style.display = "none";

  container.appendChild(menu);
}

function loadAbout(container) {
  const about = document.createElement("div");

  about.id = "about";
  about.className = "option";
  about.style.display = "none";

  container.appendChild(about);
}

function loadContact(container) {
  const contact = document.createElement("div");
  const headline = document.createElement("h1");
  const whatsapp = document.createElement("p");
  const instagram = document.createElement("p");
  const instagramIcon = document.createElement("i");

  contact.id = "contact";
  contact.className = "option";
  contact.style.display = "none";

  headline.id = "headline";
  headline.textContent = "Contato";

  instagram.innerHTML = "<i class='fa fa-instagram' aria-hidden='true'></i>" +
                        " @lora_robo";

  whatsapp.innerHTML = "<i class='fa fa-whatsapp' aria-hidden='true'></i>" +
                       " +55 81 95555-5555";

  contact.appendChild(headline);
  contact.appendChild(instagram);
  contact.appendChild(whatsapp);
  container.appendChild(contact);
}

export { loadPage };
