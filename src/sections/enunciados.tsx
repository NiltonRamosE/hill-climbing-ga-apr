import { motion } from "framer-motion";
import { FaUsers } from "react-icons/fa";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function EnunciadosSection() {
  const codigoEnunciado2 = `
  import pandas as pd
  import numpy as np

  # Crear un DataFrame con franjas horarias (duración, productividad)
  franjas = pd.DataFrame({
      'franja': [f'Franja {i+1}' for i in range(10)],
      'duracion': np.random.randint(1, 4, size=10),  # Duración entre 1 y 3 horas
      'productividad': np.random.randint(1, 11, size=10)  # Productividad entre 1 y 10
  })

  # Mostrar las franjas generadas
  print(franjas)

  # Hill Climbing
  def hill_climbing(franjas, max_horas=15):
      # Iniciar con una selección aleatoria de franjas
      seleccion = np.random.choice(franjas.index, size=5, replace=False)  # Seleccionamos 5 franjas al azar
      seleccion_franjas = franjas.loc[seleccion]
      
      def fitness(seleccion_franjas):
          horas = seleccion_franjas['duracion'].sum()
          productividad = (seleccion_franjas['productividad'] * seleccion_franjas['duracion']).sum()
          if horas <= max_horas:
              return productividad
          return -1  # Penalización si excede las horas

      # Mejorar la solución mediante Hill Climbing
      mejor_fitness = fitness(seleccion_franjas)
      while True:
          mejor_vecino = None
          mejor_fitness_vecino = mejor_fitness
          for i in range(len(franjas)):
              if i not in seleccion:
                  nuevo_seleccion = np.append(seleccion, i)
                  nuevo_seleccion_franjas = franjas.loc[nuevo_seleccion]
                  if fitness(nuevo_seleccion_franjas) > mejor_fitness_vecino:
                      mejor_fitness_vecino = fitness(nuevo_seleccion_franjas)
                      mejor_vecino = nuevo_seleccion
          if mejor_vecino is None:
              break
          seleccion = mejor_vecino
          seleccion_franjas = franjas.loc[seleccion]
          mejor_fitness = mejor_fitness_vecino
      return seleccion_franjas

  # Obtener la mejor selección
  mejor_seleccion = hill_climbing(franjas)
  print("Mejor selección de franjas:")
  print(mejor_seleccion)
`;
  const codigoEnunciado3 = `
  import pandas as pd
  import numpy as np

  # Crear un DataFrame con el menú (precio, calorías, satisfacción)
  menu = pd.DataFrame({
      'plato': [f'Plato {i+1}' for i in range(8)],
      'precio': np.random.randint(5, 7, size=8),  # Precios entre 5 y 7
      'calorias': np.random.randint(200, 600, size=8),  # Calorías entre 200 y 600
      'satisfaccion': np.random.randint(1, 11, size=8)  # Satisfacción entre 1 y 10
  })

  # Mostrar el menú generado
  print(menu)

  # Hill Climbing
  def hill_climbing(menu, presupuesto=20, max_calorias=1000, num_platos=3):
      # Iniciar con una selección aleatoria de 3 platos
      seleccion = np.random.choice(menu.index, size=num_platos, replace=False)
      seleccion_platos = menu.loc[seleccion]
      
      def fitness(seleccion_platos):
          costo_total = seleccion_platos['precio'].sum()
          calorias_total = seleccion_platos['calorias'].sum()
          if costo_total <= presupuesto and calorias_total <= max_calorias:
              return seleccion_platos['satisfaccion'].sum()
          return -1  # Penalización si excede el presupuesto o las calorías

      # Mejorar la solución mediante Hill Climbing
      mejor_fitness = fitness(seleccion_platos)
      while True:
          mejor_vecino = None
          mejor_fitness_vecino = mejor_fitness
          for i in range(len(menu)):
              if i not in seleccion:
                  nuevo_seleccion = np.append(seleccion, i)
                  nuevo_seleccion_platos = menu.loc[nuevo_seleccion]
                  if fitness(nuevo_seleccion_platos) > mejor_fitness_vecino:
                      mejor_fitness_vecino = fitness(nuevo_seleccion_platos)
                      mejor_vecino = nuevo_seleccion
          if mejor_vecino is None:
              break
          seleccion = mejor_vecino
          seleccion_platos = menu.loc[seleccion]
          mejor_fitness = mejor_fitness_vecino
      return seleccion_platos

  # Obtener la mejor selección de platos
  mejor_seleccion = hill_climbing(menu)
  print("Mejor selección de platos:")
  print(mejor_seleccion)
`;

  const codigoEnunciado4 = `
  import pandas as pd
  import numpy as np

  # Crear un DataFrame con los cursos (carga horaria, interés, facilidad)
  cursos = pd.DataFrame({
      'curso': [f'Curso {i+1}' for i in range(10)],
      'horas': np.random.randint(2, 5, size=10),  # Horas entre 2 y 4
      'interes': np.random.randint(1, 11, size=10),  # Interés entre 1 y 10
      'facilidad': np.random.randint(1, 11, size=10)  # Facilidad entre 1 y 10
  })

  # Mostrar los cursos generados
  print(cursos)

  # Hill Climbing
  def hill_climbing(cursos, max_horas=12, num_cursos=3):
      # Iniciar con una selección aleatoria de 3 cursos
      seleccion = np.random.choice(cursos.index, size=num_cursos, replace=False)
      seleccion_cursos = cursos.loc[seleccion]
      
      def fitness(seleccion_cursos):
          horas_total = seleccion_cursos['horas'].sum()
          if horas_total <= max_horas:
              return seleccion_cursos['interes'].sum()
          return -1  # Penalización si excede las horas

      # Mejorar la solución mediante Hill Climbing
      mejor_fitness = fitness(seleccion_cursos)
      while True:
          mejor_vecino = None
          mejor_fitness_vecino = mejor_fitness
          for i in range(len(cursos)):
              if i not in seleccion:
                  nuevo_seleccion = np.append(seleccion, i)
                  nuevo_seleccion_cursos = cursos.loc[nuevo_seleccion]
                  if fitness(nuevo_seleccion_cursos) > mejor_fitness_vecino:
                      mejor_fitness_vecino = fitness(nuevo_seleccion_cursos)
                      mejor_vecino = nuevo_seleccion
          if mejor_vecino is None:
              break
          seleccion = mejor_vecino
          seleccion_cursos = cursos.loc[seleccion]
          mejor_fitness = mejor_fitness_vecino
      return seleccion_cursos

  # Obtener la mejor selección de cursos
  mejor_seleccion = hill_climbing(cursos)
  print("Mejor selección de cursos:")
  print(mejor_seleccion)
`;
  return (
    <div className="relative z-10 flex flex-col items-center px-8 py-12 lg:px-20 lg:py-16 gap-12 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center gap-4 text-center mb-8"
      >
        <FaUsers className="text-nilton-neon text-5xl" />
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white">
          Enunciados
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-10 w-full max-w-5xl"
      >
        {/* Enunciado 2 */}
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-nilton-neon">
          <h2 className="text-xl font-bold text-nilton-neon mb-2">
            Enunciado 2: Optimización del Horario de Estudio
          </h2>
          <p className="text-gray-200 mb-4">
            Un estudiante tiene disponibles 10 franjas horarias libres durante
            la semana, cada una con una duración y un nivel estimado de
            productividad (del 1 al 10). El objetivo es seleccionar las mejores
            franjas para maximizar su productividad semanal total, pero con una
            restricción: no debe estudiar más de 15 horas en total.
          </p>
          <p className="text-gray-200 mb-4">
            Implementa un algoritmo de hill climbing que, partiendo de una
            selección aleatoria de franjas horarias, busque mejorar la
            productividad total sin superar el límite de horas. Usa Pandas para
            representar las franjas y NumPy para mutar la solución.
          </p>
          <div className="bg-black/30 p-4 rounded-md mt-4 text-sm text-gray-300 overflow-x-auto">
            <SyntaxHighlighter language="python" style={oneDark} wrapLines>
              {codigoEnunciado2}
            </SyntaxHighlighter>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-10 w-full max-w-5xl"
      >
        {/* Enunciado 3*/}
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-nilton-neon">
          <h2 className="text-xl font-bold text-nilton-neon mb-2">
            Enunciado 3: Selección óptima de platos en el menú universitario
          </h2>
          <p className="text-gray-200 mb-4">
            En la cafetería universitaria hay 8 platos diferentes. Cada plato
            tiene un precio, una cantidad de calorías y una puntuación de
            satisfacción (según encuestas de estudiantes). Un estudiante solo
            tiene S/20 para gastar por día y quiere obtener el máximo nivel de
            satisfacción sin pasarse del presupuesto ni consumir más de 1000
            calorías.
          </p>
          <p className="text-gray-200 mb-4">
            Utiliza Pandas para representar el menú y NumPy para generar
            combinaciones de platos. Aplica hill climbing para encontrar la
            mejor combinación de 3 platos que maximicen la satisfacción bajo las
            restricciones indicadas.
          </p>
          <div className="bg-black/30 p-4 rounded-md mt-4 text-sm text-gray-300 overflow-x-auto">
            <SyntaxHighlighter language="python" style={oneDark} wrapLines>
              {codigoEnunciado3}
            </SyntaxHighlighter>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-10 w-full max-w-5xl"
      >
        {/* Enunciado 4*/}
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-nilton-neon">
          <h2 className="text-xl font-bold text-nilton-neon mb-2">
            Enunciado 4: Elección de cursos electivos según afinidad y tiempo
          </h2>
          <p className="text-gray-200 mb-4">
            Un estudiante debe elegir 3 de entre 10 cursos electivos posibles.
            Cada curso tiene una carga horaria semanal, un nivel de interés
            personal (del 1 al 10), y una calificación histórica promedio (como
            estimador de facilidad).
          </p>
          <p className="text-gray-200 mb-4">
            El objetivo es encontrar una combinación de cursos que maximice el
            interés total del estudiante, siempre que la carga horaria combinada
            no exceda 12 horas semanales. Usa Pandas para estructurar los datos
            de los cursos y NumPy para buscar combinaciones óptimas usando un
            enfoque de hill climbing.
          </p>
          <div className="bg-black/30 p-4 rounded-md mt-4 text-sm text-gray-300 overflow-x-auto">
            <SyntaxHighlighter language="python" style={oneDark} wrapLines>
              {codigoEnunciado4}
            </SyntaxHighlighter>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
