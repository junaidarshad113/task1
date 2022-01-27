var tittle = [];
const adddes = (ev) => {
  ev.preventDefault();
  let titledes = {
    title: document.getElementById("title").value,
    des: document.getElementById("des").value,
  };
  tittle.push(titledes);
  document.forms[0].reset();

  console.log(tittle)
//   let pre = document.querySelector("#msg pre");
//   pre.textContent = "\n" + JSON.stringify(tittle, "\t");
//   localStorage.setItem("tittle", JSON.stringify(tittle));
};

document.getElementById("btn").addEventListener("click", adddes);

function search(e) {
    e.preventDefault();
  let keys = document.getElementById("text");

  //yasir

  if (tittle.indexOf(keys.value) === -1) {
    console.log("not found");
  } else {
    console.log(keys.value);
  }
}

document.getElementById("but").addEventListener("click", search);
