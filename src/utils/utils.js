export const showText = (text, textLength) => {
    if (text.length < 200) {
        return text.substring(0, text.length);
    } else {
        return text.substring(0, textLength).concat("...");
    }
}

export const getDate = (fullDate) => {
    return fullDate;
}

export const getTime = (fullDate) => {

}
