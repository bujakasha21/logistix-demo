from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.schemas import Request, RequestCreate

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

requests = [
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

@app.get("/requests", response_model=list[Request])
def get_requests():
    return requests
    
@app.post("/requests", response_model=Request)
def post_requests(request: RequestCreate):
    new_request = {
        "id": max(item["id"] for item in requests) + 1,
        "polaziste": request.polaziste,
        "odrediste": request.odrediste,
        "teret": request.teret,
        "datum": request.datum,
        "status": "Otvoren"
    }
    
    requests.append(new_request)
    return new_request
    
    
    