from flask import Flask, request, jsonify
from logic.core import your_function

app = Flask(__name__)
results = []

@app.post("/process")
def process():
    data = request.get_json(force=True)
    first = data.get("first", "")
    last = data.get("last", "")
    results.append(your_function(first, last))
    return jsonify({"results": results})

@app.post("/clear")
def clear():
    results.clear()
    return jsonify({"results": results})

if __name__ == "__main__":
    app.run(port=5000, debug=True)
