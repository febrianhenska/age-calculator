function calculate() {
  setInterval(() => {
    // input birtdate
    let birthdate = new Date(document.getElementById("birthdate").value);
    // get time
    let now = new Date();
    let ageInMs = now.getTime() - birthdate.getTime();
    let ageInS = ageInMs / 1000;
    let ageInMin = ageInS / 60;
    let ageInH = ageInMin / 60;
    let ageInD = ageInH / 24;
    let ageInM = ageInD / 30.4375;
    let ageInY = ageInM / 12;

    document.querySelector("#years").innerHTML = Math.floor(ageInY);
    document.querySelector("#months").innerHTML = Math.floor(ageInM % 12);
    document.querySelector("#days").innerHTML = Math.floor(ageInD % 30.4375);
    document.querySelector("#hours").innerHTML = Math.floor(ageInH % 24);
    document.querySelector("#minutes").innerHTML = Math.floor(ageInMin % 60);
    document.querySelector("#seconds").innerHTML = Math.floor(ageInS % 60);
    document.querySelector("#seconds").style.borderBottom = "1 px grey solid";
  }, 1000);
}

function reset() {
  window.location.reload();
}
