from fastapi import FastAPI, WebSocket
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse, RedirectResponse, FileResponse
import uvicorn
import asyncio

app = FastAPI()

app.mount('/public', StaticFiles(directory = 'public', html = True), name = 'public')
app.mount('/src', StaticFiles(directory = 'src'), name = 'src')
app.mount('/build', StaticFiles(directory = 'build'), name = 'build')

# @app.get('/static/js/main.250728df.js')
# async def redirect_main_js():
#     return RedirectResponse('http://localhost:8080/build/static/js/main.250728df.js')

@app.get('/static/{rest_of_path:path}')
async def redirect_to_build(rest_of_path):
    response = RedirectResponse(f'http://localhost:8080/build/static/{rest_of_path}')
    return response

@app.get("/", response_class = HTMLResponse)
def read_index():
    with open('./build/index.html', 'r') as index_html:
        html_content = index_html.read()
    return HTMLResponse(content = html_content)

# @app.get('/{rest_of_path:path}')
# async def redirect_from_index(rest_of_path):
#     response = None
#     if '.png' in rest_of_path or '.ico' in rest_of_path:
#         response = FileResponse(f'build/{rest_of_path}')
#     if response is None:
#         print('Response was none')
#     return response


# create a new websocket route at /ws
@app.websocket('/ws')
async def websocket_endpoint(websocket: WebSocket):
    # server accepts ws connection when client connects to server
    await websocket.accept()
    score = Score()
    score_gen = score.passive_generator()
    async for score in score_gen:
        await websocket.send_text(f'{score}')


class Score():
    def __init__(self):
        self.score = 0
    
    async def passive_generator(self):
        # use asyncio so you don't hold up the server
        while True:
            self.score += 1
            yield self.score
            await asyncio.sleep(1)

            



if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)