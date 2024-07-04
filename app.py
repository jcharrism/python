from flask import Flask
app = Flask(__name__)

@app.route('/getWeatherForecast')
def getWeatherOnline():
    return 'Today is gona be great sunny python day!'