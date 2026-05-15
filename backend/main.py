from fastapi import FastAPI

from database.database import engine, Base
from routers import auth

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(auth.router)


@app.get("/")
def root():
    return {"message": "FastAPI Auth API"}