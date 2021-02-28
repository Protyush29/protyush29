from flask import Flask, render_template, request, json
import numpy as np
import numexpr as ne

app = Flask(__name__)

@app.route('/')
def render_static():
    return render_template('index.html')

@app.route('/', methods=['POST'])
def calculator():
    if request.method == "POST":
        operation = json.loads(request.data)
        try:
            data = np.array2string(ne.evaluate(operation['data']))
        except:
            data = ':-p trick questions!'
        return json.dumps({'result': data})

if __name__ == '__main__':
    app.run(debug=True)
