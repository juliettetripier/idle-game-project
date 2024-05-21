docker rm idle-game-project

docker run --name idle-game-project -v .:/app -p 8080:8080 idle-game-project