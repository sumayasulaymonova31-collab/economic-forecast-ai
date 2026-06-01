from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()


# CORS


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.get("/")
def home():

    return {
        "message":"Economic Forecast AI Backend"
    }



@app.get("/forecast")
def forecast():

    return {

        "months":[
            "Iyun",
            "Iyul",
            "Avgust",
            "Sentabr",
            "Oktabr",
            "Noyabr"
        ],

        "predictions":[
            13800,
            13950,
            14100,
            14250,
            14400,
            14550
        ]

    }