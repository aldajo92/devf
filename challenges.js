function longestString(input){
    let visited = [];

    let currentArray = [];

    let maxString = "";

    [...input].forEach(char => {

        if(currentArray.includes(char)){
            let word = currentArray.join("")
            if(word.length > maxString.length){
                maxString = word
            }
            visited.push(word)
            currentArray = []
        }

        currentArray.push(char);
    });

    console.log(visited)
    console.log(maxString)
}

longestString("abcdabccddbb")