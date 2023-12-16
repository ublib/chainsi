import { t } from "chainsi";

console.log(`Hello, this is ${t("sample").red.bgGreen.underline.bold.italic._}.`);

console.log(t("bold").bold._);
console.log(t("underline").underline._);
console.log(t("strikethrough").strikethrough._);
console.log(t("hidden").hidden._);
console.log(t("italic").italic._);
console.log(t("dim").dim._);
console.log(t("red").red._);
console.log(t("blue").blue._);
console.log(t("green").green._);
console.log(t("yellow").yellow._);
console.log(t("magenta").magenta._);
console.log(t("cyan").cyan._);
console.log(t("white").white._);
console.log(t("grey").grey._);
console.log(t("black").black._);
console.log(t("bgRed").bgRed._);
console.log(t("bgBlue").bgBlue._);
console.log(t("bgGreen").bgGreen._);
console.log(t("bgYellow").bgYellow._);
console.log(t("bgMagenta").bgMagenta._);
console.log(t("bgCyan").bgCyan._);
console.log(t("bgWhite").bgWhite._);
console.log(t("bgGray").bgGray._);
console.log(t("bgBlack").bgBlack._);
