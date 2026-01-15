export const abbreviazione = (str) => {
    let stri = str.split(" ")
    stri[0] = stri[0].upperCase()
    stri[1] = stri[1].upperCase()
    stri[1] = stri[1].split("")[0]
}

console.log()