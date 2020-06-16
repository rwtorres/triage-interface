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

import { loadPage } from "./page-load.js";
import { createTabs, createUpperBar} from "./apply-tabs.js";
import Chart from "chart.js";

const mainContainer = document.getElementById("content");
const head = document.getElementsByTagName("head")[0];
const w3css = document.createElement("link");
const fontAwesome = document.createElement("link");

mainContainer.style.textAlign = "center";
w3css.rel = "stylesheet";
w3css.href = "./styles/w3.css";
fontAwesome.rel = "stylesheet";
fontAwesome.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
head.appendChild(w3css);
head.appendChild(fontAwesome);

createUpperBar(mainContainer);
createTabs(mainContainer);

loadPage(mainContainer);
