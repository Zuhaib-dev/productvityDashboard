function openFeatures() {
  var allElems = document.querySelectorAll(".elem");
  var fullELemPage = document.querySelectorAll(".fullElem");
  var allFullElemsBackBtn = document.querySelectorAll(".fullElem .back");

  allElems.forEach(function (elem) {
    elem.addEventListener("click", function () {
      fullELemPage[elem.id].style.display = "block";
    });
  });
  allFullElemsBackBtn.forEach(function (back) {
    back.addEventListener("click", function () {
      fullELemPage[back.id].style.display = "none";
    });
  });
}
openFeatures();
