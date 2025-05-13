import { motion } from "framer-motion"
import { FaDna} from "react-icons/fa"

export default function InfografiaAlgoritmoGenetico() {
  return (
    <section className="text-white py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        {/* Título */}
        <div className="text-center mb-10">
          <div className="flex justify-center items-center gap-3 mb-4">
            <FaDna className="text-pink-500 text-4xl" />
            <h1 className="text-3xl md:text-4xl font-bold">¿Qué es un Algoritmo Genético?</h1>
          </div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Un algoritmo genético (GA) es un tipo de algoritmo evolutivo que simula la evolución biológica natural para resolver problemas de búsqueda y optimización. Se basa en la selección natural: los individuos más aptos tienen más probabilidad de reproducirse y transmitir sus genes.
          </p>
        </div>

        {/* ¿Para qué se usan? */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-pink-400 mb-4">🎯 ¿Para qué se usan?</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Cuando el espacio de búsqueda es grande o no lineal.</li>
            <li>Si no hay una solución analítica o determinista.</li>
            <li>Para encontrar soluciones óptimas en problemas multiobjetivo o con restricciones.</li>
          </ul>
        </div>

        {/* Componentes principales */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-pink-400 mb-6">⚙️ Componentes del Algoritmo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {[
              { titulo: "Población", desc: "Conjunto de soluciones posibles (individuos)." },
              { titulo: "Codificación del Cromosoma", desc: "Representación binaria, entera, real o simbólica de una solución." },
              { titulo: "Función de Aptitud", desc: "Evalúa qué tan buena es cada solución." },
              { titulo: "Selección", desc: "Métodos: ruleta, torneo, elitismo." },
              { titulo: "Cruza (Crossover)", desc: "Mezcla genética entre dos padres. Tipos: un punto, uniforme, blend." },
              { titulo: "Mutación", desc: "Introduce cambios aleatorios para mantener la diversidad." },
              { titulo: "Reemplazo", desc: "Decide qué individuos pasan a la siguiente generación." },
              { titulo: "Condición de Paro", desc: "Por generaciones, aptitud deseada o falta de mejora." },
            ].map((item, i) => (
              <div key={i} className="bg-slate-800 p-6 rounded-lg shadow-md">
                <h4 className="text-pink-300 font-bold text-lg mb-2">{item.titulo}</h4>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Flujo del Algoritmo */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-pink-400 mb-6">📉 Flujo del Algoritmo Genético</h2>
          <div className="flex flex-col items-center text-gray-300 text-sm md:text-base space-y-6">

            {/* INICIO */}
            <div className="flex flex-col items-center">
              <svg className="w-10 h-10 text-pink-500 mb-2" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24">
                <path d="M12 4v16m8-8H4" />
              </svg>
              <div className="bg-pink-500 text-white px-4 py-2 rounded-full font-semibold shadow">Inicio</div>
            </div>

            {/* Generar población inicial */}
            <div className="flex flex-col items-center">
              <svg className="w-8 h-8 text-white mb-1" fill="none" stroke="currentColor" strokeWidth="1.5"
                viewBox="0 0 24 24">
                <path d="M9 20l-5.447-2.724A2 2 0 013 15.382V6.618a2 2 0 011.553-1.894L9 2m6 0l5.447 2.724A2 2 0 0121 6.618v8.764a2 2 0 01-1.553 1.894L15 20M9 2v2m6-2v2M9 18v4m6-4v4" />
              </svg>
              <div className="bg-slate-800 px-6 py-3 rounded-lg shadow-md text-center">
                Generar población inicial
              </div>
            </div>

            {/* Evaluar aptitud */}
            <div className="flex flex-col items-center">
              <svg className="w-8 h-8 text-green-400 mb-1" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24">
                <path d="M9 17v-2h6v2M9 13V9h6v4M5 21V7l7-4 7 4v14" />
              </svg>
              <div className="bg-slate-800 px-6 py-3 rounded-lg shadow-md text-center">
                Evaluar función de aptitud
              </div>
            </div>

            {/* Condición de paro */}
            <div className="flex flex-col items-center">
              <svg className="w-8 h-8 text-yellow-400 mb-1" fill="none" stroke="currentColor" strokeWidth="1.5"
                viewBox="0 0 24 24">
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="bg-slate-800 px-6 py-3 rounded-lg shadow-md text-center">
                ¿Se cumple la condición de paro?
              </div>
            </div>

            {/* DECISIÓN: Sí / No */}
            <div className="flex justify-center gap-10 text-sm md:text-base font-semibold text-white">
              {/* Sí */}
              <div className="flex flex-col items-center">
                <svg className="w-6 h-6 text-green-400 mb-1" fill="none" stroke="currentColor" strokeWidth="2"
                  viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-green-400">Sí</span>
                <div className="bg-green-600 px-4 py-2 mt-2 rounded-full shadow">Fin</div>
              </div>
              {/* No */}
              <div className="flex flex-col items-center">
                <svg className="w-6 h-6 text-yellow-400 mb-1" fill="none" stroke="currentColor" strokeWidth="2"
                  viewBox="0 0 24 24">
                  <path d="M4 4v16h16V4H4zm4 4h8v8H8V8z" />
                </svg>
                <span className="text-yellow-400">No</span>
                <span className="text-gray-400 italic text-xs mt-1">Continuar iteración</span>
              </div>
            </div>

            {/* BLOQUE DE OPERACIONES */}
            <div className="grid md:grid-cols-2 gap-4 w-full md:w-2/3 mt-6">
              {/* Selección */}
              <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-lg shadow text-center">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2"
                  viewBox="0 0 24 24">
                  <path d="M8 16l-4-4 4-4m8 8l4-4-4-4" />
                </svg>
                <span>Seleccionar padres</span>
              </div>

              {/* Cruza */}
              <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-lg shadow text-center">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2"
                  viewBox="0 0 24 24">
                  <path d="M12 4v16m8-8H4" />
                </svg>
                <span>Aplicar cruza</span>
              </div>

              {/* Mutación */}
              <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-lg shadow text-center">
                <svg className="w-6 h-6 text-rose-400" fill="none" stroke="currentColor" strokeWidth="2"
                  viewBox="0 0 24 24">
                  <path d="M12 20l9-8-9-8-9 8 9 8z" />
                </svg>
                <span>Aplicar mutación</span>
              </div>

              {/* Nueva población */}
              <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-lg shadow text-center">
                <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" strokeWidth="2"
                  viewBox="0 0 24 24">
                  <path d="M3 7h18M3 12h18M3 17h18" />
                </svg>
                <span>Generar nueva población</span>
              </div>
            </div>

            {/* Volver a Evaluar */}
            <div className="text-center text-gray-400 text-sm italic mt-4">🔁 Repetir desde evaluación de aptitud</div>
          </div>
        </div>

        {/* Ventajas */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-green-400 mb-6">🧠 Ventajas</h2>
          <div className="grid gap-4">
            {[
              ["✅", "No requieren derivadas ni funciones continuas."],
              ["🌐", "Funcionan bien con espacios complejos y multidimensionales."],
              ["⚙️", "Se pueden paralelizar fácilmente."],
              ["🎯", "Pueden encontrar soluciones óptimas múltiples."],
            ].map(([icon, text], i) => (
              <div key={i} className="flex items-start bg-slate-800 p-4 rounded-xl shadow text-gray-300">
                <div className="text-2xl mr-3">{icon}</div>
                <p className="leading-snug">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Limitaciones */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-yellow-400 mb-6">⚠️ Limitaciones</h2>
          <div className="grid gap-4">
            {[
              ["🐢", "Pueden ser lentos si no se parametrizan bien."],
              ["📉", "Posible convergencia prematura por baja diversidad."],
              ["❌", "No garantizan la mejor solución global."],
            ].map(([icon, text], i) => (
              <div key={i} className="flex items-start bg-slate-800 p-4 rounded-xl shadow text-gray-300">
                <div className="text-2xl mr-3">{icon}</div>
                <p className="leading-snug">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Extensiones */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-cyan-400 mb-6">📦 Extensiones Populares</h2>
          <div className="grid gap-4">
            {[
              ["🔀", "Algoritmos multiobjetivo (NSGA-II, SPEA2)."],
              ["🧬", "GAs híbridos con aprendizaje local."],
              ["🤝", "Algoritmos coevolutivos (poblaciones colaborativas)."],
              ["🧠", "Algoritmos meméticos (GA + búsqueda local)."],
            ].map(([icon, text], i) => (
              <div key={i} className="flex items-start bg-slate-800 p-4 rounded-xl shadow text-gray-300">
                <div className="text-2xl mr-3">{icon}</div>
                <p className="leading-snug">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sección de Ejemplo Python */}
        <h3 className="text-3xl font-bold text-pink-400 mt-20 mb-8 flex items-center justify-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 255" className="w-8 h-8 text-yellow-400">
            <path fill="currentColor" d="M128 0c70.7 0 128 57.3 128 128S198.7 256 128 256 0 198.7 0 128 57.3 0 128 0z" />
            <path fill="#fff" d="M96 56h64a24 24 0 0124 24v40H96V56zM96 136h64a24 24 0 0124 24v40a24 24 0 01-24 24H96V136z" />
          </svg>
          Ejemplo básico en Python + DEAP
        </h3>

        <div className="bg-gray-900 text-gray-100 font-mono text-sm rounded-xl shadow-xl p-6 max-w-4xl mx-auto overflow-x-auto border border-gray-700">
          <pre>{`import random
from deap import base, creator, tools

# Objetivo: aproximar a 15 usando binarios de 5 bits
creator.create("FitnessMax", base.Fitness, weights=(1.0,))
creator.create("Individual", list, fitness=creator.FitnessMax)

toolbox = base.Toolbox()
toolbox.register("attr_bool", random.randint, 0, 1)
toolbox.register("individual", tools.initRepeat, creator.Individual,
                 toolbox.attr_bool, 5)
toolbox.register("population", tools.initRepeat, list, toolbox.individual)

def evalSum(individual):
    return sum(individual),  # suma de bits como fitness

toolbox.register("evaluate", evalSum)
toolbox.register("mate", tools.cxTwoPoint)
toolbox.register("mutate", tools.mutFlipBit, indpb=0.1)
toolbox.register("select", tools.selTournament, tournsize=3)

# Evolución
pop = toolbox.population(n=10)
for gen in range(10):
    offspring = toolbox.select(pop, len(pop))
    offspring = list(map(toolbox.clone, offspring))

    for child1, child2 in zip(offspring[::2], offspring[1::2]):
        if random.random() < 0.5:
            toolbox.mate(child1, child2)
            del child1.fitness.values
            del child2.fitness.values

    for mutant in offspring:
        if random.random() < 0.2:
            toolbox.mutate(mutant)
            del mutant.fitness.values

    invalid = [ind for ind in offspring if not ind.fitness.valid]
    fitnesses = map(toolbox.evaluate, invalid)
    for ind, fit in zip(invalid, fitnesses):
        ind.fitness.values = fit

    pop[:] = offspring

top = tools.selBest(pop, 1)[0]
print("Mejor solución:", top, "→", sum(top))`}</pre>
        </div>

        {/* Resultado */}
        <p className="mt-8 text-gray-300 text-base max-w-3xl mx-auto leading-relaxed text-center">
          Este algoritmo evoluciona soluciones binarias para aproximar un número objetivo.
          Utiliza operadores genéticos como cruce, mutación y selección para encontrar el mejor individuo con una suma de bits cercana a <code className="text-pink-400">15</code>.
        </p>

        {/* Recursos adicionales */}
        <div className="mt-12 mb-10 text-gray-300 max-w-3xl mx-auto">
          <h4 className="text-xl font-semibold text-blue-400 mb-4">📘 Recursos recomendados</h4>
          <ul className="list-disc list-inside space-y-2">
            <li><i>Genetic Algorithms in Search, Optimization, and Machine Learning</i> — Goldberg (1989)</li>
            <li><i>Genetic Programming</i> — Koza (1992)</li>
            <li>Documentación oficial de DEAP: <a href="https://deap.readthedocs.io/" target="_blank" rel="noopener noreferrer" className="text-pink-400 underline">https://deap.readthedocs.io/</a></li>
          </ul>
        </div>

        <p className="text-sm text-gray-500 text-center mt-14">
          Elaborado con fines educativos — Algoritmos Genéticos & IA Evolutiva 🧬
        </p>
      </motion.div>
    </section>
  )
}
