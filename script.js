let logoImg = document.getElementById("logo-img");
let search = document.getElementById("search");
// let allBtn = document.getElementById("all")
// let smileBtn = document.getElementById("smile")
// let heartBtn = document.getElementById("heart")
// let faceBtn = document.getElementById("face")
// let flagBtn = document.getElementById("flag")
// let handBtn = document.getElementById("hand")
let container = document.querySelector(".container");
let filterBtns = document.querySelectorAll(".filters li");

const header = document.querySelector("header");
const body = document.body;

function filterEmoji(searchText) {
  container.innerHTML = "";
  let filteredArr = emojiList.filter((emoji) => {
    if (searchText === "") return true;
    else if (emoji.description.includes(searchText)) return true;
    else if (emoji.category.includes(searchText)) return true;
    else if (emoji.aliases.includes(searchText)) return true;
    else if (emoji.tags.includes(searchText)) return true;
    else if (searchText === "all") return true;
  });

  search.innerText = "";

  displayEmoji(filteredArr);
}

function displayEmoji(arr) {
  arr.forEach((ele) => {
    // console.log(ele.emoji);

    let itemDiv = document.createElement("div");
    itemDiv.className = "item-div";
    let item = document.createElement("p");
    item.className = "item";
    item.innerText = ele.emoji;
    itemDiv.appendChild(item);
    container.appendChild(itemDiv);

    item.addEventListener("click", () => {
      navigator.clipboard.writeText(ele.emoji);
      // alert(`${ele.emoji} copied to clipboard`)
      item.classList.remove("item");
      item.className = "copy-text";
      item.innerText = "emoji copied";
      setTimeout(() => {
        item.classList.remove("copy-text");
        item.innerText = ele.emoji;
        item.className = "item";
      }, 1500);
    });
  });
}
// displayEmoji(emojiList)

window.addEventListener("load", () => {
  displayEmoji(emojiList);
  setTimeout(() => {
    header.classList.add("fade-down");
    body.classList.add("fade-up");
    header.style.opacity = 1;
    body.style.opacity = 1;
  }, 800);

//   header.classList.remove("fade-down")
//   body.classList.remove("fade-up")
});

search.addEventListener("keyup", () => {
  let inputText = search.value.toLowerCase();
  // console.log(inputText);

  filterEmoji(inputText);
});

filterBtns.forEach((btn) => {
  console.log(btn);
  btn.addEventListener("click", () => {
    filterEmoji(btn.innerText.toLowerCase());
  });
});
