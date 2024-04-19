export default function clearDOM(){
    const content = document.getElementById("content");
    const body= document.querySelector("body");

    body.removeChild(content);
}