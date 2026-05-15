from fastapi import FastAPI

from backend.database.database import engine, Base
from backend.routers import auth

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(auth.router)


@app.get("/")
def root():
    return {"message": "FastAPI Auth API"}