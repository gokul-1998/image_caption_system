from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from pydantic import BaseModel

from database.database import get_db
from repository.user import signup, login

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)


class SignupRequest(BaseModel):
    username: str
    email: str
    password: str


class LoginRequest(BaseModel):
    email: str
    password: str


@router.post("/signup")
def signup_user(request: SignupRequest, db: Session = Depends(get_db)):

    return signup(
        request.username,
        request.email,
        request.password,
        db
    )


@router.post("/login")
def login_user(request: LoginRequest, db: Session = Depends(get_db)):

    return login(
        request.email,
        request.password,
        db
    )