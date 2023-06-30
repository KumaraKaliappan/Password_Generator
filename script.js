const outputElement = document.querySelector("#output");
const btncopy = document.querySelector("#btncopy");
const lenpwd = document.querySelector("#length");
const num = document.querySelector("#number");
const capLet = document.querySelector("#capital");
const smallLet = document.querySelector("#small");
const symbol = document.querySelector("#symbol");
const btn = document.querySelector("#btn");

/* Copy function to clipboard */
btncopy.addEventListener("click", async() => {
    const pass = outputElement.value;
    if(pass)
    {
        await navigator.clipboard.writeText(pass);
        alert(" Copied to clipboard");
    }
    else
    {
        alert(" There is no password to copy");
    }
});

/* ASCII values
    0 to 127
    32 - space
    0 - null value
    48 - 57  0 to 9
    65 - 90 A to Z - capital
    97 - 122 a to z - small

*/
/* random function */
function generateRsndomChar(min,max)
{
    const limit = max-min+1;
    return String.fromCharCode(Math.floor(Math.random()*limit)+min);
}
/* calling function */
function capitalValue()
{
    return generateRsndomChar(65,90);
}
function smallValue()
{
    return generateRsndomChar(97,122);
}
function numberValue()
{
    return generateRsndomChar(48,57);
}

function symbolValue()
{
    const symbols = "~!#@$%^&*()_-=+[];:',<.>?";
    return symbols[Math.floor(Math.random()*symbols.length)];
}
const functionArray=[
    {
        element:capLet,
        fun:capitalValue
    },
    {
        element:smallLet,
        fun:smallValue
    },
    {
        element:num,
        fun:numberValue
    },
    {
        element:symbol,
        fun:symbolValue
    }
];
btn.addEventListener("click", (a) => {
    a.preventDefault();// to off the actions attiribute in form tag

    const lim = lenpwd.value;
    let generatedpassword = "";

    const funArray = functionArray.filter(({element}) => element.checked);

    for(i=0;i<lim;i++)
    {
        const index = Math.floor(Math.random()*funArray.length);
        const letter = funArray[index].fun();
        generatedpassword += letter;
    }


    outputElement.value = generatedpassword;
});
const btnclear = document.querySelector(".btnclear");
btnclear.addEventListener("click", () => {
    outputElement.value = "";
});