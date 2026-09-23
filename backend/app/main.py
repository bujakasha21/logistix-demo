from fastapi import FastAPI
from app.schemas import Request, RequestCreate

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
    
@app.post("/requests", response_model=Request)
def post_requests(request: RequestCreate):
    return {    
        "id": 3,
        "polaziste": request.polaziste,
        "odrediste": request.odrediste,
        "teret": request.teret,
        "datum": request.datum,
        "status": "Otvoren"
    }
    
    
    