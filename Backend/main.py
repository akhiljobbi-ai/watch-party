from fastapi import FastAPI ,WebSocket ,WebSocketDisconnect

app = FastAPI()
connections = []

@app.websocket("/ws")
async def websocket_endpoint(websocket : WebSocket):
    await websocket.accept()

    connections.append(websocket)
    num_connections=len(connections)
    print(f"🟢 Client connected | Active connections : {num_connections}")

    try:

        while True:
            message = await websocket.receive_text()
            print(message)

            for connection in connections :
                if connection != websocket:
                    await connection.send_text(message)
    except WebSocketDisconnect:
        connections.remove(websocket)
        num_connections=len(connections)
        print(f"🔴 Client disconnected | Active connections : {num_connections}")
