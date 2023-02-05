function commonElements (arrOne, arrTwo){
    for (let i = 0; i < arrOne.length; i++) {
        let firstWord = arrOne[i]; 
        for (let j = 0; j < arrTwo.length; j++){
            let secondWord = arrTwo[j]; 
            if (firstWord === secondWord) {
                console.log(firstWord)
            }
        }
    }
}commonElements(
  ["Hey", "hello", 2, 4, "Peter", "e"],

  ["Petar", 10, "hey", 4, "hello", "2"]
);
