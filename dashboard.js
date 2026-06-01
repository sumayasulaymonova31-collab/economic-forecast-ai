// USERNAME


const username =
localStorage.getItem("username");



if(username){

   document.getElementById(
"welcomeMessage"
).innerHTML =

`Salom, ${username} 👋`;

}




// CHART


const ctx =
document.getElementById(
"forecastChart"
).getContext("2d");



const forecastChart =
new Chart(ctx, {

    type:"line",

    data:{

        labels:[],

        datasets:[{

            label:"Dollar kursi",

            data:[],

            borderColor:"#00c3ff",

            backgroundColor:
            "rgba(0,195,255,0.2)",

            borderWidth:4,

            pointRadius:5,

            pointBackgroundColor:"#00c3ff",

            fill:true,

            tension:0.4

        }]

    },



    options:{

        responsive:true,

        plugins:{

            legend:{

                labels:{
                    color:"white"
                }

            }

        },



        scales:{

            x:{

                ticks:{
                    color:"white"
                }

            },



            y:{

                beginAtZero:false,

                ticks:{
                    color:"white"
                }

            }

        }

    }

});





// LOAD BACKEND DATA


async function loadForecast(){


    try{


        const response =
        await fetch(
        "http://127.0.0.1:8000/forecast"
        );



        const result =
        await response.json();




        forecastChart.data.labels =
        result.months;



        forecastChart.data.datasets[0].data =
        result.predictions;



        forecastChart.update();



    }

    catch(error){

        console.log(error);

    }

}



loadForecast();





// UPDATE FORECAST


function updateForecast(){


    const indicator =
    document.getElementById(
    "indicator"
    ).value;




    let data = [];




    // DOLLAR


    if(indicator === "Dollar kursi"){

        data = [
            13800,
            13950,
            14100,
            14250,
            14400,
            14550
        ];



        document.getElementById(
        "stability"
        ).innerHTML =
        "74%";



        document.getElementById(
        "trend"
        ).innerHTML =
        "Growth";

    }




    // YAIM


    else if(indicator === "YAIM"){

        data = [
            5.1,
            5.3,
            5.6,
            5.8,
            6.1,
            6.3
        ];



        document.getElementById(
        "stability"
        ).innerHTML =
        "91%";



        document.getElementById(
        "trend"
        ).innerHTML =
        "Positive";

    }




    // INFLATSIYA


    else if(indicator === "Inflyatsiya"){

        data = [
            9.1,
            8.8,
            8.5,
            8.1,
            7.8,
            7.5
        ];



        document.getElementById(
        "stability"
        ).innerHTML =
        "82%";



        document.getElementById(
        "trend"
        ).innerHTML =
        "Stable";

    }




    // EKSPORT


    else if(indicator === "Eksport"){

        data = [
            12,
            14,
            16,
            18,
            20,
            22
        ];



        document.getElementById(
        "stability"
        ).innerHTML =
        "88%";



        document.getElementById(
        "trend"
        ).innerHTML =
        "Growth";

    }




    // UPDATE CHART


    forecastChart.data.datasets[0].label =
    indicator;



    forecastChart.data.datasets[0].data =
    data;



    forecastChart.update();

}




// PNG DOWNLOAD


function downloadChart(){


    const a =
    document.createElement("a");



    a.href =
    forecastChart.toBase64Image();



    a.download =
    "forecast_chart.png";



    a.click();

}




// CSV DOWNLOAD


function downloadCSV(){


    let csv =
    "Oy,Qiymat\n";



    const months =
    forecastChart.data.labels;



    const values =
    forecastChart.data.datasets[0].data;




    for(let i=0; i<months.length; i++){

        csv +=
        months[i] +
        "," +
        values[i] +
        "\n";

    }




    const blob =
    new Blob(
        [csv],
        {type:"text/csv"}
    );



    const link =
    document.createElement("a");



    link.href =
    URL.createObjectURL(blob);



    link.download =
    "economic_forecast.csv";



    link.click();

}




// PDF DOWNLOAD


function downloadPDF(){


    const report = `

Economic Forecast AI Report

Generated Successfully

`;



    const blob =
    new Blob(
        [report],
        {type:"application/pdf"}
    );



    const link =
    document.createElement("a");



    link.href =
    URL.createObjectURL(blob);



    link.download =
    "Economic_Report.pdf";



    link.click();

}




// CSV UPLOAD


document.getElementById(
"fileInput"
).addEventListener(
"change",

function(event){

    const file =
    event.target.files[0];



    if(!file)
    return;



    const reader =
    new FileReader();




    reader.onload =
    function(e){

        const text =
        e.target.result;



        const rows =
        text.trim().split("\n");



        let labels = [];
        let values = [];




        for(let i=1; i<rows.length; i++){

            const cols =
            rows[i].split(",");



            labels.push(cols[0]);



            values.push(
                Number(cols[1])
            );

        }




        forecastChart.data.labels =
        labels;



        forecastChart.data.datasets[0].data =
        values;



        forecastChart.update();

    };



    reader.readAsText(file);

});
// SIDEBAR NAVIGATION


function scrollToSection(sectionId, element){


    document.getElementById(
    sectionId
    ).scrollIntoView({

        behavior:"smooth"

    });




    const items =
    document.querySelectorAll(
    ".sidebar ul li"
    );



    items.forEach(item=>{

        item.classList.remove(
        "active"
        );

    });




    element.classList.add(
    "active"
    );

}