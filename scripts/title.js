var titles = [
  "Back Security Roblox",
  "Tool Slover", 
  "Ugphone Tool",
  "Crekitdev ",
  "Remake Chanbao ",
];

function changeTitle() {
  var index = 0;

  setInterval(function() {
      document.title = titles[index];
      index = (index + 1) % titles.length;
  }, 1000);
}

changeTitle();
