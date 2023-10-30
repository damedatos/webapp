from modelo import recomendar
from flask import Flask, request
import json

app = Flask(__name__)
with open('materias.json', 'r') as json_file:
    materias = json.load(json_file)

@app.route('/api/materias/buscar', methods=['GET'])
def buscar():
    busqueda = request.args.get('q', '').lower()
    if (busqueda == ''):
        return []
    results = [materia for materia in materias if busqueda in materia['nombre'].lower()]
    return results

@app.route('/api/materias/recomendar', methods=['POST'])
def recomendar():
    data = request.get_json()
    return recomendar(data['materias'])
    

if __name__ == '__main__':
    app.run(debug=True, port = 3001)
