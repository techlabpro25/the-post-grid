export const trimbychar = (str, max, suffix) => {
    if(max.length == 0){
        max = 300
    }
    return str?.length < max ? str : `${str?.substr(0, str?.substr(0, max - suffix.length).lastIndexOf(' '))}${suffix}`;
}

export const trimbyword = (textToLimit, wordLimit, suffix, element, type) =>{
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

