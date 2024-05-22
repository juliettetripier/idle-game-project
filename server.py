from fastapi import FastAPI, WebSocket
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