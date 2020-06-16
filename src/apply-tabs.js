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

function createTabButton(id, name, bar) {
  const newButton = document.createElement("button");

  newButton.className = "w3-bar-item w3-button";
  newButton.onclick = () => openTab(id);
  newButton.textContent = name;
  bar.appendChild(newButton);
}

function createUpperBar(container) {
  const upperBar = document.createElement("div");
  const bars = document.createElement("button");
  const barsIcon = document.createElement("i");

  upperBar.className = "w3-bar w3-black";
  upperBar.style.position = "sticky";
  upperBar.style.top = "0";
  barsIcon.id = "bars-icon";
  barsIcon.className = "fa fa-bars";
  bars.className = "w3-bar-item w3-button w3-large";
  bars.appendChild(barsIcon);
  bars.onclick = () => toggleTabBar();
  upperBar.appendChild(bars);

  container.appendChild(upperBar);
}

function createTabs(container) {
  const tabBar = document.createElement("div");

  tabBar.id = "tab-bar"
  tabBar.className = "w3-sidebar w3-bar-block w3-black w3-animate-left";
  tabBar.style.display = "none";
  tabBar.style.zindex = "4";

  createTabButton("home", "Página Principal", tabBar);
//  createTabButton("menu", "Projetos", tabBar);
//  createTabButton("about", "Quem Somos", tabBar);
  createTabButton("contact", "Contato", tabBar);

  container.appendChild(tabBar);
}

function openTabBar() {
  document.getElementById("tab-bar").style.display = "block";
  document.getElementById("bars-icon").className = "fa fa-close";
}

function closeTabBar() {
  document.getElementById("tab-bar").style.display = "none";
  document.getElementById("bars-icon").className = "fa fa-bars";
}

function toggleTabBar() {
  if (document.getElementById("tab-bar").style.display === "none") {
    openTabBar();
  } else {
    closeTabBar();
  }
}

function openTab(name) {
  const options = document.getElementsByClassName("option");
  for (let i = 0; i < options.length; i++) {
    options[i].style.display = "none";
  }
  document.getElementById(name).style.display = "block";
  closeTabBar();
  window.scrollTo(0, 0);
}

export {createTabs, createUpperBar};
