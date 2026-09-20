from fastapi import FastAPI
from app.schemas import Request

app = FastAPI()

@app.get("/requests", response_model=list[Request])
def get_requests():
    return [
    {
        "id": 1,
        "polaziste": "Istocno Sarajevo",
        "odrediste": "Bijeljina",
        "teret": "Namjestaj",
        "datum": "19.9.2026",
        "status": "Otvoren"
    },
    {
        "id": 2,
        "polaziste": "Tuzla",
        "odrediste": "Sarajevo",
        "teret": "Gradjevinski materijal",
        "datum": "16.9.2026",
        "status": "Otvoren"
    }
]