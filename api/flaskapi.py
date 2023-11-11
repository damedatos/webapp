from modelo import recomendador
from flask import Flask, request
import json, csv

#
#   API DE PRUEBAS
#   NO SE USA EN PROD
#

app = Flask(__name__)

with open('materias.json', 'r') as json_file:
    materias = json.load(json_file)

def materiasPorIDs(ids):
    results = [materia for materia in materias if materia['id'] in ids]
    return results

@app.route('/api/materias/buscar', methods=['GET'])
def buscar():
    busqueda = request.args.get('q', '').lower()
    results = [materia for materia in materias if busqueda in materia['nombre'].lower()]
    return results

@app.route('/api/materias/recomendar', methods=['POST'])
def recomendar():
    data = request.get_json()
    return materiasPorIDs(recomendador(data['materias']))

@app.route('/api/log', methods=['POST'])
def logger():
    try:
        data = json.loads(request.data)
        with open('analytics.csv', 'a') as csv_file:
            writer = csv.writer(csv_file)
            writer.writerow(data)
        return '200'
    except:
        return '500'

if __name__ == '__main__':
    app.run(debug=True, port = 8000)
