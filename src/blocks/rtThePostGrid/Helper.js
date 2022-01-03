export const trimbychar = (str, max, suffix) => {
    if(max.length == 0){
        max = 300
    }
    const newstring = str?.length < max ? str : `${str?.substr(0, max)}${suffix}`;
    return newstring
}

export const trimbyword = (textToLimit, wordLimit, suffix) =>{
    if(wordLimit.length == 0){
        wordLimit = 25
    }
    var finalText = "";
    var text2 = textToLimit.replace(/\s+/g, ' ');
    var text3 = text2.split(' ');
    var numberOfWords = text3.length;
    if(numberOfWords > wordLimit)
    {
        for(var i=0; i< wordLimit; i++)
            finalText = finalText+" "+ text3[i]+" ";

        return finalText+" "+suffix;
    }else 
        return textToLimit;
}

export const full_content = (content) =>{
    return content;
}

