import folio from "./folio.json";
import { formatDistanceToNow } from "date-fns";

const containerEl = document.getElementById("container");
containerEl.textContent = JSON.stringify(folio, null, 2);

let state ={};
state.birthday = `${formatDistanceToNow(new Date(folio.informations.birthday))} old`;

const BTH = document.getElementById("info");
BTH.textContent = state.birthday;





