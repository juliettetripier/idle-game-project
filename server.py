from fastapi import FastAPI, WebSocket
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse, RedirectResponse, FileResponse
import uvicorn

app = FastAPI()

app.mount('/public', StaticFiles(directory = 'public', html = True), name = 'public')
app.mount('/src', StaticFiles(directory = 'src'), name = 'src')
app.mount('/build', StaticFiles(directory = 'build'), name = 'build')

@app.get('/static/{rest_of_path:path}')
async def redirect_to_build(request, rest_of_path):
    response = RedirectResponse(url = f'/build/static/{rest_of_path}')
    return response

@app.get("/", response_class = HTMLResponse)
def read_index():
    with open('./build/index.html', 'r') as index_html:
        html_content = index_html.read()
    return HTMLResponse(content = html_content)

@app.get('/{rest_of_path:path}')
async def redirect_from_index(rest_of_path):
    response = None
    if '.png' in rest_of_path or '.ico' in rest_of_path:
        response = FileResponse(f'build/{rest_of_path}')
    if response is None:
        print('Response was none')
    return response


# create a new websocket route at /ws
@app.websocket('/ws')
async def websocket_endpoint(websocket: WebSocket):
    # server accepts ws connection when client connects to server
    await websocket.accept()
    while True:
        # server waits for client to send message
        message = await websocket.receive_text()
        # server sends response back to client
        await websocket.send_text(f'Message: {message}')




if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)