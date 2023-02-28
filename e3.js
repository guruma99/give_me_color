const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];


// let arrColors = new Array(colors);
// console.log(arrColors);

const button = document.querySelector("button");
const body = document.querySelector("body");

function changeBackground() {
  console.clear();
  let colorsCopy = [...colors];
  console.log(colorsCopy);
  // 배열 colorsCopy에 colors를 값복사한다.
  // colorsCopy에서 랜덤넘버를 얻는다.
  // colorsCopy에서 랜덤넘버를 빼서 color1에 넣는다.
  // colorsCopy에서 랜덤넘버를 얻는다.
  // colorsCopy에서 랜덤넘버를 빼서 color2에 넣는다.

  const color1 = colorsCopy[before(colorsCopy.length)];
  colorsCopy.splice(colorsCopy.indexOf(color1),1);
  // .splice() = 처음 값이 건드릴 index, 두번째 값이 건드릴 갯수, 세번째부터는 추가해줄 요소
  const color2 = colorsCopy[before(colorsCopy.length)];
  console.log(colorsCopy);

  
  console.log(color1,color2);
  
  document.body.style.background =
    // "linear-gradient(to right , " + color1[0]+ ", " + color2[0]+ ")";
    body.style.backgroundImage = `linear-gradient(0.25turn, ${color1}, ${color2})`;
}

function before(e) {
  return Math.floor(Math.random() * e);
};

button.addEventListener("click", changeBackground);

console.log([(Math.random()) * colors.length]);
// console.log(colors);