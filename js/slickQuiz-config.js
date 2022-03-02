// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "La distribución como variable de marketing",
        "main":    "<p>Definimos distribución como el conjunto de tareas y operaciones necesarias para llevar los productos desde el lugar de fabricación hasta los lugares de venta.</p>",
        "results": "<h5>Learn More</h5><p>Etiam scelerisque, nunc ac egestas consequat, odio nibh euismod nulla, eget auctor orci nibh vel nisi. Aliquam erat volutpat. Mauris vel neque sit amet nunc gravida congue sed sit amet purus.</p>",
        "level1":  "Muy bien!!",
        "level2":  "Bien!",
        "level3":  "Bueno ...!",
        "level4":  "Relee el tema",
        "level5":  "Relee el tema..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Cuando decimos que la distribución es una variable del marketing a largo plazo nos referimos a que",
            "a": [
                {"option": "Las decisiones que se toman al respecto son difícilmente modificables",      "correct": true},
                {"option": "Acercar el producto a la clientela conlleva costes adicionales a la fabricación",     "correct": false},
                {"option": "Los productos acabados se entregan al distribuidor para su acercamiento al consumidor, por lo que quedan en posesión del distribuidor",      "correct": false},
                 // no comma here
            ],
            "correct": "<p><span>Correcto</span> Lo mismo ocurre con el producto. El precio y la comunicación son modificables a corto plazo</p>",
            "incorrect": "<p><span>No es Correcto.</span> </p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Cuando decimos que la distribución es una variable del marketing que repercute en el precio nos referimos a que",
            "a": [
                {"option": "Las decisiones que se toman al respecto son difícilmente modificables",      "correct": false},
                {"option": "Acercar el producto a la clientela conlleva costes adicionales a la fabricación",     "correct": true},
                {"option": "Los productos acabados se entregan al distribuidor para su acercamiento al consumidor, por lo que quedan en posesión del distribuidor",      "correct": false},
                 // no comma here
            ],
            "correct": "<p><span>Correcto</span> Las diferentes partes que intervienen en la distribución quieren obtener una ganancia</p>",
            "incorrect": "<p><span>No es Correcto.</span> </p>" // no comma here // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Cuando decimos que la distribución es una variable del marketing que produce una pérdida del control nos referimos a que",
            "a": [
                {"option": "Las decisiones que se toman al respecto son difícilmente modificables",      "correct": false},
                {"option": "Acercar el producto a la clientela conlleva costes adicionales a la fabricación",     "correct": false},
                {"option": "Los productos acabados se entregan al distribuidor para su acercamiento al consumidor, por lo que quedan en posesión del distribuidor",      "correct": true},
                 // no comma here
            ],
            "correct": "<p><span>Correcto!</span> El distribuidor puede aplicar estrategias diferentes</p>",
            "incorrect": "<p><span>No es Correcto.</span> </p>" 
        },
        { // Question 4
            "q": "Se refiere al traslado de los productos desde el punto de fabricación",
            "a": [
                {"option": "Transporte",    "correct": true},
                {"option": "Difusión",     "correct": false},
                {"option": "Diversificación",      "correct": false},
                {"option": "Logística",   "correct": false},
            ],
            "correct": "<p> <span> Correcto!</span><p>",
            "incorrect": "<p><span>No es Correcto!</span></p>" // no comma here
        },
        { // Question 5
            "q": "Permite que los productos lleguen hasta diferentes puntos de venta, desde un único punto de fabricación",
            "a": [
                {"option": "Transporte",    "correct": false},
                {"option": "Difusión",     "correct": true},
                {"option": "Diversificación",      "correct": false},
                {"option": "Logística",   "correct": false},
            ],
            "correct": "<p><span>Correcto!</span><p>",
            "incorrect": "<p><span>No es Correcto!</span></p>" // no comma here        
        },

        { // Question 6
            "q": "Transformación de lotes de venta mediante división de la producción en cantidades adecuadas para su venta",
            "a": [
                {"option": "Transporte",    "correct": false},
                {"option": "Difusión",     "correct": false},
                {"option": "Diversificación",      "correct": true},
                {"option": "Logística",   "correct": false},
            ],
            "correct": "<p><span>Correcto!</span><p>",
            "incorrect": "<p><span>No es Correcto!</span></p>" // no comma here        
        },
        { // Question 7
            "q": "Estudia cómo llevar el producto al público en las mejores condiciones",
            "a": [
                {"option": "Transporte",    "correct": false},
                {"option": "Difusión",     "correct": false},
                {"option": "Diversificación",      "correct": false},
                {"option": "Logística",   "correct": true},
            ],
            "correct": "<p><span>Correcto!</span><p>",
            "incorrect": "<p><span>No es Correcto!</span></p>" // no comma here        
        },
        { // Question 8
            "q": "Los servicios, ¿son susceptibles de distribución física?",
            "a": [
                {"option": "Sí",    "correct": false},
                {"option": "No",     "correct": true},
            ],
            "correct": "<p><span>Correcto!</span> La distribución física hace referencia al conjunto de actividades que conllevan una acción física sobre los productos compuesta por transporte, diversificación y almacenamiento<p>",
            "incorrect": "<p><span>No es Correcto!</span></p>" // no comma here        
        },
        { // Question 9
            "q": "Un canal de distribución es ...",
            "a": [
                {"option": "El camino que sigue un producto desde el punto de fabricación hasta su consumo; está formado por el conjunto de personas u organizaciones (intermediarios) que intervienen a lo largo de dicho camino",    "correct": true},
                {"option": "El proceso que sigue un producto desde el punto de fabricación hasta su consumo; está formado por el conjunto de personas u organizaciones (intermediarios) que intervienen a lo largo de dicho camino",     "correct": false},
                {"option": "La frecuencia que sigue un producto desde el punto de fabricación hasta su consumo; está formado por el conjunto de personas u organizaciones (intermediarios) que intervienen a lo largo de dicho camino",      "correct": false},
                ,
            ],
            "correct": "<p><span>Correcto!</span><p>",
            "incorrect": "<p><span>No es Correcto!</span></p>" // no comma here        
        },
        { // Question 10
            "q": "Según el tipo de producto que se comercializa distinguimos ...",
            "a": [
                {"option": "Canales de productos de consumo, industriales y servicios",    "correct": true},
                {"option": "Canales de productos de consumo, industriales y de capital",     "correct": false},
                {"option": "Canales de productos de materias primas, suministros y servicios",      "correct": false},
                ,
            ],
            "correct": "<p><span>Correcto!</span><p>",
            "incorrect": "<p><span>No es Correcto!</span></p>" // no comma here        
        },

        { // Question 11
            "q": "Un canal de distribución directo ...",
            "a": [
                {"option": "No tiene intermediarios; el producto va directamente del fabricante al consumidor final",    "correct": true},
                {"option": "No tiene intermediarios; el producto va directamente del detallista al consumidor final",     "correct": false},
                {"option": "El consumidor compra directamente al mayorista",      "correct": false},
                ,
            ],
            "correct": "<p>Correcto!<p>",
            "incorrect": "<p><span>No es Correcto!</span></p>" // no comma here        
        },
        { // Question 12
            "q": "Un canal de distribución indirecto corto ...",
            "a": [
                {"option": "Participa un único intermediario, el detallista o minorista",    "correct": true},
                {"option": "Participa un único intermediario, el mayorista",     "correct": false},
                {"option": "Participa un único intermediario, el agente",      "correct": false},
                ,
            ],
            "correct": "<p><span>Correcto!</span><p>",
            "incorrect": "<p><span>No es Correcto!</span></p>" // no comma here        
        },
        { // Question 13
            "q": "Un canal de distribución indirecto largo ...",
            "a": [
                {"option": "Participa al menos dos intermediarios, mayorista y minorista",    "correct": true},
                {"option": "Participa al menos dos intermediarios, mayorista y agente",     "correct": false},
                {"option": "Participa al menos dos intermediarios, agente y minorista",      "correct": false},
                ,
            ],
            "correct": "<p><span>Correcto!</span><p>",
            "incorrect": "<p></span>No es Correcto!</span></p>" // no comma here        
        },
        { // Question 14
            "q": "Un canal de distribución indirecto muy largo ...",
            "a": [
                {"option": "Las distancias recorridas superan los 500 km",    "correct": false},
                {"option": "Existen al menos dos mayoristas",     "correct": false},
                {"option": "Tiene la estructura Fabricante -> Agente -> Mayorista -> Minorista -> Consumidor final",      "correct": true},
                ,
            ],
            "correct": "<p><span>Correcto!</span><p>",
            "incorrect": "<p><span>No es Correcto!</span></p>" // no comma here        
        },
        { // Question 15
            "q": "El objetivo final de la estrategia de omnicanalidad es mejorar la experiencia del usuario brindándole la misma información a través de todos los canales de distribución. Son ejemplos de omnicanalidad",
            "a": [
                {"option": "El cliente tiene el mismo carro de la compra en la página web y en la aplicación móvil",    "correct": true},
                {"option": "El cliente tiene múltiples canales de compra (web, aplicación móvil, tienda física, ...) pero no comparten los mismos datos del cliente",     "correct": false},
                {"option": "La empresa ofrece las mismas promociones en todos los canales",      "correct": true},
                {"option": "La empresa tiene las bases de datos integradas y coherentes: las unidades físicas en la aplicación móvil coinciden en la página web",      "correct": true},
                ,
            ],
            "select_all":true,
            "correct": "<p><span>Correcto!</span><p>",
            "incorrect": "<p><span>No es Correcto!</span></p>" // no comma here        
        },
        { // Question 16
            "q": "Verdadero o falso",
            "a": [
                {"option": "Es preferible un canal corto si hay pocos compradores", "correct": true},
                {"option": "Para el comercio internacional resulta más rentable un canal largo o muy largo, con operadores especializados", "correct": true},
                {"option": "Las limitaciones legales no afectan a la elección del canal de distribución", "correct": false},
                {"option": "Cuanto más amplia sea la cartera de productos es más recomendable el canal directo",  "correct": true},
                {"option": "La distribución indirecta incurre en unos costes fijos mayores que la distribución directa",  "correct": false},
                {"option": "Cuanto más amplia sea la cartera de productos es más recomendable el canal directo",  "correct": true},
                {"option": "La distribución indirecta incurre en unos costes variables mayores que la distribución directa",  "correct": true},


                ,
            ],
            "correct": "<p><span>Correcto!</span><p>",
            "incorrect": "<p><span>No es Correcto!</span></p>" // no comma here        
        },
        { // Question 17
            "q": "Un inconveniente de la distribución indirecta para el fabricante es que ...",
            "a": [
                {"option": "reduce el número de transacciones con el consumidor final", "correct":false },
                {"option": "reduce sus costes, ya que no se ocupa del transporte y del almacenamiento", "correct":false },
                {"option": "el precio final se ve incrementado, ya que el intermediario/s añaden un margen por su gestión", "correct": true}
                ,
            ],
            "correct": "<p><span>Correcto!</span><p>",
            "incorrect": "<p><span>No es Correcto!</span></p>" // no comma here        
        },
        { // Question 18
            "q": "Un inconveniente de la distribución indirecta para el fabricante es que ...",
            "a": [
                {"option": "reduce el número de transacciones con el consumidor final", "correct":false },
                {"option": "reduce sus costes, ya que no se ocupa del transporte y del almacenamiento", "correct":false },
                {"option": "el precio final se ve incrementado, ya que el intermediario/s añaden un margen por su gestión", "correct": true}
                ,
            ],
            "correct": "<p><span>Correcto!</span><p>",
            "incorrect": "<p><span>No es Correcto!</span></p>" // no comma here        
        },
        { // Question 19
            "q": "Adquieren mercancía a fabricantes o a otros mayoristas para revender a otros mayoristas o minoristas",
            "a": [
                {"option": "Mayoristas", "correct":true },
                {"option": "Minoristas", "correct":false },
            ],
            "correct": "<p><span>Correcto!</span><p>",
            "incorrect": "<p><span>No es Correcto!</span></p>" // no comma here        
        },
        { // Question 20
            "q": "Venden directamente al consumidor final",
            "a": [
                {"option": "Mayoristas", "correct":false },
                {"option": "Minoristas", "correct":true },
            ],
            "correct": "<p><span>Correcto!</span><p>",
            "incorrect": "<p><span>No es Correcto!</span></p>" // no comma here        
        },
        { // Question 21
            "q": "Venden directamente al consumidor final",
            "a": [
                {"option": "Mayoristas", "correct":false },
                {"option": "Minoristas", "correct":true },
            ],
            "correct": "<p><span>Correcto!</span><p>",
            "incorrect": "<p><span>No es Correcto!</span></p>" // no comma here        
        },
        { // Question 22
            "q": "Un comercio independiente es el que ...",
            "a": [
                {"option": "realiza su actividad de manera independiente", "correct":true },
                {"option": "se unen varios intermediarios pero conservando su independencia con el objetivo de obtener mejores precios comprando un mayor volumen o acceder con menores riesgos a nuevos mercados", "correct":false },
                {"option": "varios eslabones del canal de distribución se agrupan y forman una sola entidad de manera que cada eslabón pierde la independencia","correct":false},
            ],
            "correct": "<p><span>Correcto!</span><p>",
            "incorrect": "<p><span>No es Correcto!</span></p>" // no comma here        
        },
        { // Question 23
            "q": "Un comercio asociado es el que ...",
            "a": [
                {"option": "realiza su actividad de manera independiente", "correct":false },
                {"option": "se unen varios intermediarios pero conservando su independencia con el objetivo de obtener mejores precios comprando un mayor volumen o acceder con menores riesgos a nuevos mercados", "correct":true },
                {"option": "varios eslabones del canal de distribución se agrupan y forman una sola entidad de manera que cada eslabón pierde la independencia","correct":false},
            ],
            "correct": "<p><span>Correcto!</span><p>",
            "incorrect": "<p><span>No es Correcto!</span></p>" // no comma here        
        },
        { // Question 24
            "q": "Un comercio integrado es el que ...",
            "a": [
                {"option": "realiza su actividad de manera independiente", "correct":false },
                {"option": "se unen varios intermediarios pero conservando su independencia con el objetivo de obtener mejores precios comprando un mayor volumen o acceder con menores riesgos a nuevos mercados", "correct":false },
                {"option": "varios eslabones del canal de distribución se agrupan y forman una sola entidad de manera que cada eslabón pierde la independencia","correct":true},
            ],
            "correct": "<p><span>Correcto!</span><p>",
            "incorrect": "<p><span>No es Correcto!</span></p>" // no comma here        
        }  ,

    ]
};
