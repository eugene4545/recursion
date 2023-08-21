//-------------Recursion---------//
function checkIfPalindrome(word){ // we are checking if a word is a palindrome
    //we start by initializing the function
    let ispalindrome = true; // we set the default boolean to true
    word = "radar";// we input the word in question
    
    if(word.length <= 1){// setting a condition where we examine if the total 
    //number of characters is less than or equal to one
        return ispalindrome; //if it is so we return true
    }

    let left = 0;// we set left to the first index of the word length (0) first character
    let right = word. length -1;// we set the right to the last index off the string

    while(left < right){ // the while loop checking the word length from left to right
        if(word[left] !== word[right]){//if the character(s) on the left is not equal to
            //the charcters on the right.
        ispalindrome = false;// we return false
        break;
    }
        left++ // left increases
        right--// right decreases
    }
    

    if(ispalindrome){
        return `${word} is a palindrome.`// if true return this string
    }else{
        return `${word} is not a palindrome.`// if false return this string
    }


}

console.log(checkIfPalindrome())