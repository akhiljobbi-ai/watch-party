# 🎬 Watch Party

A real-time, browser-based synchronized video player built with **FastAPI** and **WebSockets**. Multiple users can join a session and watch videos together with instant play, pause, and seek synchronization across all connected clients.

---

## ✨ Features

* **Real-Time Playback Sync:** Automatically broadcasts play, pause, and timestamp seek events across all connected browsers via WebSockets.
* **Custom Browser Video Player:** Interactive HTML5/JavaScript player supporting playback controls, timeline scrubbing, and volume adjustment.
* **Lightweight FastAPI Backend:** Asynchronous WebSocket connection manager capable of relaying state updates with minimal latency.

---

## 🛠️ Tech Stack

* **Backend:** Python, FastAPI, Uvicorn, WebSockets
* **Frontend:** HTML5, CSS3, Vanilla JavaScript

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone [https://github.com/akhiljobbi-ai/watch-party.git](https://github.com/akhiljobbi-ai/watch-party.git)
cd watch-party