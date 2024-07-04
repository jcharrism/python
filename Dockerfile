# Usar una imagen base oficial de Python
FROM python:3.9-slim

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar los archivos de requerimientos y el código del microservicio
COPY requirements.txt requirements.txt
COPY . .

# Instalar las dependencias necesarias
RUN pip install --no-cache-dir -r requirements.txt

# Exponer el puerto en el que correrá el microservicio
EXPOSE 8000

# Definir el comando de entrada para ejecutar el microservicio
CMD ["python", "app.py"]
