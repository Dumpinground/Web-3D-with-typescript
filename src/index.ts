import "./styles.css";

const app = document.getElementById("app");
if (!app) throw new Error();

app.innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>`;

const bar = document.getElementById("bar");
if (!bar) throw new Error();

const a: string = "The Weather";
const message = "Second";
const link: string = "second.html";

bar.innerHTML = `
<h1>${a}</h1>
<div>${message}
  <a href="${link}">second</a>
</div>
<div> Babylon
  <a href="babylonPage.html">babylon</a>
</div>
<div> Street Light
  <a href="StreetLight.html">StreetLight</a>
</div>
<div> Three
  <a href="ThreePage.html">Three</a>
</div>
`;
