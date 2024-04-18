
export default function Header(){
    const body = document.querySelector("body");

    const header = document.createElement("div");
    header.classList.add("header");

    const title = document.createElement("h1");
    title.classList.add("title");
    title.innerText = "Weather Cast App ⛅";

    const search = document.createElement("div");
    search.classList.add("search");

    const input = document.createElement("input");
    input.placeholder = "City/Country";

    const p = document.createElement("button");
    p.innerText = "🔎";

    search.appendChild(input);
    search.appendChild(p);
    header.appendChild(title);
    header.appendChild(search);

    body.appendChild(header);

}