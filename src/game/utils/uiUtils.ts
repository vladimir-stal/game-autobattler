export const insertStats = (text: string, stats: (string | undefined)[]): string => {
    let newText = text;
    //console.log(">insertStats >>", text, stats);
    stats.forEach((stat, index) => {
        const num = index + 1;
        const replaceString = "{" + num + "}";
        if (stat) {
            //console.log(`replace  ${replaceString} with ${stat}`);
            newText = newText.replace(replaceString, stat);
        }
    });
    //console.log(">resulkt >>", newText);
    return newText;
};
