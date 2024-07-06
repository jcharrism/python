from flask import Flask
app = Flask(__name__)

@app.route('/getAplicacionIA')
def getWeatherOnline():
    return 'La aplicacion esta lista!'