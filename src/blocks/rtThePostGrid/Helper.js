export const trimbychar = (str, max, suffix) => {
    return str?.length < max ? str : `${str?.substr(0, str?.substr(0, max - suffix.length).lastIndexOf(' '))}${suffix}`;
}

export const trimbyword = (textToLimit, wordLimit, suffix) =>{
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

