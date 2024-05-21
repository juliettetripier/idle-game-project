FROM python:3

WORKDIR /app

RUN apt-get update && apt-get install -y nodejs npm
COPY package*.json ./
RUN npm install

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

RUN npm run build

CMD [ "uvicorn", "--host", "0.0.0.0", "--port", "8080", "--reload", "server:app" ]

EXPOSE 8080