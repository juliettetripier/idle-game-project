from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse
import uvicorn

app = FastAPI()

app.mount('/public', StaticFiles(directory = 'public', html = True), name = 'public')
app.mount('/src', StaticFiles(directory = 'src'), name = 'src')
app.mount('/build', StaticFiles(directory = 'build'), name = 'build')

@app.get("/", response_class = HTMLResponse)
def read_index():
    with open('build/index.html', 'r') as index_html:
        html_content = index_html.read()
    return HTMLResponse(content = html_content)


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)



# from fastapi import FastAPI, HTTPException
# from fastapi.responses import HTMLResponse
# from fastapi.staticfiles import StaticFiles
# from starlette.middleware import Middleware
# from starlette.middleware.base import BaseHTTPMiddleware
# import uvicorn
# import mimetypes

# class MIMETypeMiddleware(BaseHTTPMiddleware):
#     async def dispatch(self, request, call_next):
#         response = await call_next(request)
#         if request.url.path.endswith('.js'):
#             response.headers['Content-Type'] = 'application/javascript'
#         return response

# mimetypes.add_type("application/javascript", ".js", True)

# middleware = [
#     Middleware(MIMETypeMiddleware),
# ]

# app = FastAPI(middleware=middleware)

# app.mount('/public', StaticFiles(directory='public', html=True), name='public')
# app.mount('/src', StaticFiles(directory='src'), name='src')

# @app.get("/", response_class=HTMLResponse)
# def read_index():
#     with open('public/index.html', 'r') as index_html:
#         html_content = index_html.read()
#     return HTMLResponse(content=html_content)

# if __name__ == "__main__":
#     uvicorn.run(app, host="0.0.0.0", port=8000)