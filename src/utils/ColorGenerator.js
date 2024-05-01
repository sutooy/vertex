
const colorList = [
    "neoRed",
    "neoPurple",
    "neoBlue",
    "neoYellow",
    "neoCyan",
    "neoLightBlue",
    "neoPink",
    "neoOrange",
    "neoBrown",
]

export const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colorList.length);
    return colorList[randomIndex];
}