function calculateFlames() {
  let boy = document.getElementById("boy").value.toLowerCase().replace(/\s+/g, "");
  let girl = document.getElementById("girl").value.toLowerCase().replace(/\s+/g, "");

  if (!boy || !girl) {
    document.getElementById("output").innerText = "Please enter both names 😅";
    return;
  }

  // Convert to arrays
  let boyArr = boy.split("");
  let girlArr = girl.split("");

  // Remove common letters safely
  for (let i = 0; i < boyArr.length; i++) {
    let index = girlArr.indexOf(boyArr[i]);
    if (index !== -1) {
      boyArr.splice(i, 1);
      girlArr.splice(index, 1);
      i--; // adjust index after removal
    }
  }

  // Remaining letters count
  let count = boyArr.length + girlArr.length;
  let flames = ["F", "L", "A", "M", "E", "S"];

  // FLAMES logic
  let index = 0;
  while (flames.length > 1) {
    index = (count + index - 1) % flames.length;
    flames.splice(index, 1);
  }

  // Result
  let result = "";
  switch (flames[0]) {
    case "F": result = "Friends 💛"; break;
    case "L": result = "Lovers ❤️"; break;
    case "A": result = "Affection 💞"; break;
    case "M": result = "Marriage 💍"; break;
    case "E": result = "Enemies 💢"; break;
    case "S": result = "Siblings 💖"; break;
  }

  document.getElementById("output").innerText = `${result}`;
}
