var people = 0;
while (true) {
  if (people < 5) {
    console.log(people);
    people = people + 1;
  } else {
    console.log("people are more than 4");
    break;
  }
}
