function sendMessage(){

    const input =
    document.getElementById(
    "userInput"
    );



    const chatBox =
    document.getElementById(
    "chatBox"
    );



    const text =
    input.value;



    if(text.trim() === "")
    return;




    // USER MESSAGE



    chatBox.innerHTML += `

    <div class="user-message">

        ${text}

    </div>

    `;



    input.value = "";




    // AI RESPONSE



    let response =
    "Savol tushunilmadi.";




    // SALOM



    if(
        text.toLowerCase().includes("salom")
    ){

        response =
        "👋 Salom! Economic Forecast AI platformasiga xush kelibsiz.";

    }




    // DOLLAR



    else if(
        text.toLowerCase().includes("dollar")
    ){

        response =
        "📈 Dollar kursi bo‘yicha AI modeli o‘sish tendensiyasini aniqladi.";

    }




    // YAIM



    else if(
        text.toLowerCase().includes("yaim")
    ){

        response =
        "💹 YAIM ko‘rsatkichlari bo‘yicha iqtisodiy o‘sish prognoz qilinmoqda.";

    }




    // INFLATSIYA



    else if(
        text.toLowerCase().includes("inflyatsiya")
    ){

        response =
        "📉 Inflyatsiya darajasi pasayishi prognoz qilinmoqda.";

    }




    // AI



    else if(
        text.toLowerCase().includes("ai")
    ){

        response =
        "🤖 Economic Forecast AI sun’iy intellekt asosida iqtisodiy bashoratlarni amalga oshiradi.";

    }




    // DEFAULT



    else{

        response =
        "🧠 Economic AI ushbu savol bo‘yicha iqtisodiy tahlilni amalga oshirmoqda.";

    }




    // BOT MESSAGE



    setTimeout(()=>{

        chatBox.innerHTML += `

        <div class="bot-message">

            ${response}

        </div>

        `;



        chatBox.scrollTop =
        chatBox.scrollHeight;

    },700);

}




// ENTER SEND



document.getElementById(
"userInput"
).addEventListener("keypress",

function(event){

    if(event.key === "Enter"){

        sendMessage();

    }

});