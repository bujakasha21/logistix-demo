from pydantic import BaseModel

class Request(BaseModel):
    id: int
    polaziste: str
    odrediste: str
    teret: str
    datum: str
    status: str
    
class RequestCreate(BaseModel):
    polaziste: str
    odrediste: str
    teret: str
    datum: str