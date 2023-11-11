#
#   MODELO DE PRUEBAS
#   NO SE USA EN PROD
#
import random

def recomendador(materias):
    return [random.randint(1, 71) for _ in range(random.randint(1, 5))]