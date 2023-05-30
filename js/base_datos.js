//Array donde se guardan todos los productos
let plantas = [];

// constructores de productos  
class Producto {
    constructor(id, family, nombre, vivienda, ubicacion, proposito, img, propiedades) {
        this.ID = id;
        this.family = family;
        this.nombre = nombre;
        this.vivienda = vivienda;
        this.ubicacion = ubicacion;
        this.proposito = proposito;
        this.img = img;
        this.propiedades = propiedades;
    }
}

// falsa base de datos
// familia suculentas 
let producto1 = new Producto(1, "Suculentas", "cactus", ["Depto", "Casa"], "Interior", "Deco", "../imagenes/imagenes_baseDatos/cactus.png", "Los cactus son plantas suculentas adaptadas a climas áridos. Tienen tallos carnosos, espinas en lugar de hojas y flores llamativas. Son resistentes y fáciles de cuidar. Almacenando agua en sus tejidos, sobreviven en condiciones de sequía. Sus propiedades medicinales varían, desde aliviar quemaduras solares y picaduras de insectos hasta tratar problemas digestivos y cutáneos.");
let producto2 = new Producto(2, "Suculentas", "pata de oso", ["Depto", "Casa"], "Interior", "Deco", "../imagenes/imagenes_baseDatos/pata_oso.png", "La suculenta Pata de Oso, también conocida como Cotyledon tomentosa, es una planta de aspecto único y atractivo. Sus hojas carnosas y peludas se asemejan a las patas de un oso, de ahí su nombre. Es fácil de cuidar y puede adaptarse a diferentes condiciones de luz y agua. Además de ser una planta ornamental popular, se ha utilizado en la medicina tradicional para tratar quemaduras, heridas y problemas respiratorio");
let producto3 = new Producto(3,"Suculentas", "lithops", "Depto", "Interior", "Deco", "../imagenes/imagenes_baseDatos/lithops.png", "Descubre los fascinantes Lithops, plantas suculentas conocidas como 'piedras vivas'. Su increíble capacidad de mimetismo y sus formas únicas te sorprenderán. Adéntrate en el mundo de estas joyas botánicas y descubre cómo cuidarlas en tu propio hogar. ¡Embárcate en una aventura verde con Lithops!");
let producto4 = new Producto(4, "Suculentas", "aloe vera", ["Depto", "Casa"], "Interior", "Deco", "../imagenes/imagenes_baseDatos/aloe_vera.png", "Descubre el extraordinario poder del Aloe Vera. Esta planta milagrosa es conocida por sus increíbles propiedades y beneficios para la salud. El Aloe Vera es un hidratante natural que ayuda a rejuvenecer la piel y promover su elasticidad. Sus propiedades antiinflamatorias y cicatrizantes lo convierten en un aliado para aliviar quemaduras y irritaciones cutáneas. Además, su gel nutritivo es ideal para fortalecer el cabello y combatir la caspa. ¡Experimenta los múltiples beneficios del Aloe Vera y descubre una belleza y bienestar naturales!");
let producto5 = new Producto(5, "Suculentas", "cola de burro", "Depto", "Interior", "Deco", "../imagenes/imagenes_baseDatos/cola_burro.png", "Con sus hojas carnosas en forma de gota, esta planta es una joya para cualquier espacio. Su resistencia y bajo mantenimiento la convierten en la compañera perfecta para aquellos con manos no tan verdes. La cola de burro es conocida por almacenar agua en sus hojas, lo que la hace extremadamente resistente a la sequía. Además, sus tonos verdes y plateados le dan un toque elegante a cualquier entorno. Atrévete a cultivar esta suculenta y descubre una planta cautivadora que robará todas las miradas.");
let producto6 = new Producto(6, "Suculentas", "schlumbergera", ["Depto", "Casa"], "Interior", "Deco", "../imagenes/imagenes_baseDatos/Schlumbergera.png", "Descubre la belleza natural de la Schlumbergera. Esta planta exótica cautiva con sus coloridas flores en forma de cactus, que florecen en invierno. Su resistencia y fácil cuidado la convierten en la opción perfecta para adornar tu hogar. Disfruta de sus propiedades decorativas y su capacidad para purificar el aire. ¡Lleva la magia de la Schlumbergera a tu espacio y deleita tus sentidos con su encanto único!");
// familia árboles 
let producto7 = new Producto(100, "Árboles", "pino", "Casa", "Exterior", "Deco", "../imagenes/imagenes_baseDatos/pino.png", "Esta especie arbórea destaca por su imponente altura y elegante forma. Su madera resistente y duradera lo convierte en un material ideal para la construcción y el mobiliario. Además, el pino ofrece propiedades terapéuticas gracias a su aroma relajante y purificante. Embellece tu entorno con la nobleza del pino y disfruta de su singular encanto natural.");
let producto8 = new Producto(101, "Árboles", "sauce lloron", "Casa", "Exterior", "Deco", "../imagenes/imagenes_baseDatos/sauce_lloron.png", "Descubre la encantadora belleza del Sauce Llorón. Sus ramas gráciles y colgantes crean una sombra relajante y su follaje verde exuberante cautiva la vista. Este árbol ornamental es resistente y se adapta a diversos climas. Además, sus raíces profundas ayudan a prevenir la erosión del suelo. Ideal para jardines y parques, el Sauce Llorón te brinda un rincón de serenidad y elegancia natural. ¡Embellece tu entorno con este majestuoso árbol!");
let producto9 = new Producto(102, "Árboles", "acacia", "Casa", "Exterior", "Deco", "../imagenes/imagenes_baseDatos/acacia.jpg", "Un árbol lleno de encanto y versatilidad. Sus ramas espinosas y su follaje verde vibrante le brindan un aspecto distintivo. La Acacia es conocida por su resistencia a la sequía y su capacidad para adaptarse a diferentes tipos de suelos. Sus flores amarillas y fragantes atraen una gran variedad de polinizadores. Además, sus raíces profundas ayudan a prevenir la erosión del suelo. Tanto en jardines como en paisajes naturales, la Acacia aporta belleza y beneficios ambientales. ¡Descubre el encanto eterno de la Acacia en tu entorno!");
let producto10 = new Producto(103, "Árboles", "eucalipto", "Casa", "Exterior", "Deco", "../imagenes/imagenes_baseDatos/eucalipto.jpg", "Un árbol emblemático con características únicas. Su tronco recto y su corteza decorativa le otorgan un aspecto imponente. El Eucalipto es conocido por su rápido crecimiento y su capacidad para adaptarse a diversos climas. Sus hojas aromáticas liberan un aroma refrescante y sus aceites esenciales tienen propiedades medicinales. Además, el Eucalipto contribuye a la purificación del aire ya la conservación del agua del suelo. Ya sea en jardines o en plantaciones forestales, el Eucalipto brinda belleza y beneficios ambientales. ¡Explora la grandeza del Eucalipto en tu entorno!");
let producto11 = new Producto(104, "Árboles", "palo borracho", "Casa", "Exterior", "Deco", "../imagenes/imagenes_baseDatos/palo_borracho.jpg", "Con su tronco robusto y ramas espinosas, este árbol exótico destaca en cualquier paisaje. El Palo Borracho es resistente a condiciones adversas y requiere poco mantenimiento. Su florecimiento abundante con hermosas flores blancas o rosadas añade un toque de elegancia y atrae a polinizadores. Además, su tronco suave al tacto y su forma peculiar lo convierten en una pieza única en tu jardín. Disfruta de su sombra y admira la belleza natural del Palo Borracho en todo su esplendor.");
let producto12 = new Producto(105, "Árboles", "ceibo", "Casa", "Exterior", "Deco", "../imagenes/imagenes_baseDatos/ceibo.jpg", "El ceibo flor nacional de Argentina. Con su follaje frondoso y flores vistosas, este árbol tropical cautiva con su encanto natural. El Caibo es conocido por su resistencia y adaptabilidad a climas cálidos y húmedos. Sus raíces fuertes y extensas previenen la erosión del suelo y brindan estabilidad. Además, sus frutos comestibles y nutritivos son un regalo de la naturaleza. Disfruta de su sombra refrescante y de la música que producen las hojas cuando las acaricia el viento.");
let producto13 = new Producto(106, "Árboles", "cerezo", "Casa", "Exterior", "Huerta", "../imagenes/imagenes_baseDatos/cerezo.jpg", "Con su tronco esbelto y hojas verde intenso, este árbol impresiona por su presencia en cualquier entorno. El Ceezo es conocido por su resistencia y adaptabilidad a distintos climas y suelos. Su follaje denso brinda sombra y frescura en los días calurosos. Además, sus flores delicadas atraen una variedad de polinizadores. Este árbol de rápido crecimiento se convierte en un punto focal en jardines y parques. Embellece tu espacio al aire libre con la majestuosidad del Ceezo y disfruta de su belleza durante todo el año.");
let producto14 = new Producto(107, "Árboles", "limonero", "Casa", "Exterior", "Huerta", "../imagenes/imagenes_baseDatos/limonero.jpg", "Descubre el encanto del Limonero. Con sus brillantes frutos amarillos y fragantes flores blancas, este árbol cítrico te deleitará con su belleza y sabor. El Limonero es apreciado por su resistencia y capacidad de adaptación a diferentes climas. Además de su valor ornamental, sus limones son una fuente de vitamina C y versatilidad culinaria. Cultivar un Limonero en tu jardín te brinda frescura y bienestar. Disfruta de su aroma embriagador y cosecha tus propios limones. ¡Agrega una pizca de frescura cítrica a tu vida con el Limonero!");
let producto15 = new Producto(108, "Árboles", "naranjo", "Casa", "Exterior", "Huerta", "../imagenes/imagenes_baseDatos/naranjo.jpg", "Con su exquisito aroma y frutos jugosos, este árbol ofrece una experiencia cítrica inigualable. El Naranjo es conocido por su fácil cultivo y adaptabilidad a diferentes climas. Sus naranjas llenas de vitamina C son un deleite para el paladar y se utilizan en una amplia gama de recetas. Además, su follaje verde brillante brinda sombra y frescura en los días calurosos. Disfruta de la belleza y los beneficios de cultivar tus propias naranjas. Embellece tu jardín y deleita tus sentidos con el encanto del Naranjo, un árbol que aporta alegría y vitalidad a tu entorno.");
let producto16 = new Producto(109, "Árboles", "manzano", "Casa", "Exterior", "Huerta", "../imagenes/imagenes_baseDatos/manzano.jpg", "Con su elegante ramaje y flores fragantes, este árbol ofrece una experiencia encantadora en cualquier jardín. El Manzano es conocido por su facilidad de cultivo y su capacidad de adaptación a diferentes climas. Sus sabrosas manzanas, ricas en nutrientes y antioxidantes, son un regalo para el paladar y se utilizan en una variedad de platos dulces y salados. Además, su follaje verde exuberante brinda sombra y frescura en los días soleados. Disfruta de la belleza y los beneficios de cultivar tus propias manzanas. Embellece tu entorno con el encanto del Manzano y cosecha la recompensa de tu esfuerzo y cuidado.");
let producto17 = new Producto(110, "Árboles", "nogal", "Casa", "Exterior", "Huerta", "../imagenes/imagenes_baseDatos/nogal.jpg", "Con su imponente porte y frutos nutricionales, este árbol agrega un toque de grandeza a cualquier paisaje. El Nogal es conocido por su longevidad y su resistencia a diferentes climas. Sus nueces, ricas en ácidos grasos saludables, son un verdadero tesoro culinario y nutritivo. Además, su follaje frondoso proporciona sombra y frescura en los días calurosos. Disfruta de la belleza y los beneficios de cultivar tus propios nogales. Embellece tu entorno con el encanto del Nogal y aprovecha su generosidad a lo largo de los años.");
let producto18 = new Producto(111, "Árboles", "aguacatero", "Casa", "Exterior", "Huerta", "../imagenes/imagenes_baseDatos/palta.png", "Descubre la exquisitez y la versatilidad del Aguacatero. Con su fruto cremoso y suculento, este árbol es una joya en cualquier jardín. El Aguacatero es conocido por su fácil cultivo y su adaptabilidad a diferentes climas. Sus aguacates, ricos en grasas saludables y nutrientes esenciales, son el ingrediente perfecto para una alimentación equilibrada. Además, su follaje perenne brinda sombra y privacidad. Disfruta de la satisfacción de cosechar tus propios aguacates y deleita tu paladar con su sabor inigualable.");
// familia huerta 
let producto19 = new Producto(200, "Huerta", "tomate", "Casa", "Exterior", "Huerta", "../imagenes/imagenes_baseDatos/tomate.jpg", "Con su fácil cultivo y abundantes beneficios, los tomates son una elección perfecta para cualquier jardinero. Disfruta de su sabor fresco y jugoso en ensaladas, salsas y platos caseros. Los tomates son ricos en antioxidantes y vitaminas, promoviendo una alimentación saludable. Además, su cultivo en macetas o jardines es accesible para todos. Embárcate en la experiencia gratificante de cultivar tus propios tomates y disfruta de la frescura y calidad que solo una cosecha casera puede ofrecer.");
let producto20 = new Producto(201, "Huerta", "zanahoria", ["Depto", "Casa"], "Exterior", "Huerta", "../imagenes/imagenes_baseDatos/zanahoria.png", "Descubre la alegría de cultivar tus propias zanahorias. Con su sabor dulce y crujiente, estas raíces nutritivas son un tesoro en el huerto. Las zanahorias son fáciles de cultivar y se adaptan a diversos climas. Su alto contenido de vitamina A y antioxidantes promueve la salud ocular y el sistema inmunológico. Además, su versatilidad en la cocina permite su uso en una amplia variedad de platos. Cultivar zanahorias en macetas o en el jardín es una actividad gratificante para toda la familia. Embárcate en esta aventura y disfruta de la satisfacción de cosechar tus propias zanahorias frescas y deliciosas.");
let producto21 = new Producto(202, "Huerta", "zapallo", "Casa", "Exterior", "Huerta", "../imagenes/imagenes_baseDatos/zapallo.jpg", "Con sus enormes hojas y frutos vibrantes, esta planta es un tesoro en cualquier huerto. El zapallo es fácil de cultivar y se adapta a diversos climas. Sus frutos son versátiles en la cocina, ideales para sopas, guisos y postres. Además, su pulpa es rica en fibra y antioxidantes, promoviendo una digestión saludable. Cultivar zapallos en el jardín es una experiencia gratificante para disfrutar en familia. Embárcate en esta aventura y disfruta de la belleza y los beneficios de tener tu propio huerto de zapallos frescos y deliciosos.");
let producto22 = new Producto(203, "Huerta", "papa", "Casa", "Exterior", "Huerta", "../imagenes/imagenes_baseDatos/papa.jpg", "Descubre la versatilidad y la satisfacción de cultivar tus propias papas. Con su sabor único y su variedad de usos culinarios, las papas son una elección imprescindible en cualquier huerto. Son una excelente fuente de carbohidratos, fibra y vitamina C. Disfruta de su versatilidad en platos como puré, papas fritas y guisos. Cultivar papas en tu jardín es una experiencia gratificante que te conecta con la naturaleza y te brinda alimentos frescos y nutritivos. Embárcate en esta aventura y disfruta de la satisfacción de cosechar tus propias papas caseras.");
let producto23 = new Producto(204, "Huerta", "cebolla", ["Depto", "Casa"], "Exterior", "Huerta", "../imagenes/imagenes_baseDatos/cebolla.jpg", "Con su sabor distintivo y sus múltiples beneficios, las cebollas son un ingrediente esencial en la cocina. Fáciles de cultivar y adaptables a diferentes climas, las cebollas ofrecen una cosecha abundante. Son ricas en antioxidantes y compuestos antiinflamatorios, promoviendo la salud en general. Además, su versatilidad en la cocina las convierte en un ingrediente imprescindible en numerosos platos. Cultivar cebollas en tu jardín te brinda alimentos frescos y de calidad, además de la satisfacción de cosechar tus propias cebollas caseras.");
let producto24 = new Producto(205, "Huerta", "tomate cherry", "Casa", "Interior", "Huerta", "../imagenes/imagenes_baseDatos/tomatecherry.png", "Con su tamaño pequeño y su sabor explosivo, son una joya en cualquier huerto o jardín. Los tomates cherry son fáciles de cultivar, ideales para principiantes. Su rápido crecimiento y alta producción te brindan una cosecha abundante. Cultivar tomates cherry te permite disfrutar de su frescura y calidad en cada bocado. Embárcate en esta experiencia y descubre la satisfacción de cosechar tus propios tomates cherry, llenando tu cocina con su sabor y frescura.");
let producto49 = new Producto(206, "Huerta", "frutilla", ["Depto", "Casa"], "Interior", "Huerta", "../imagenes/imagenes_baseDatos/frutilla.png", "Con su sabor jugoso y su aroma irresistible, las frutillas son una delicia en cualquier huerto o jardín. Son fáciles de cultivar y se adaptan a espacios reducidos. Disfruta de su frescura en postres, batidos y ensaladas. Además, son una excelente fuente de vitamina C y antioxidantes. Cultivar frutillas te brinda la oportunidad de disfrutar de su sabor fresco y natural. Embárcate en esta aventura y disfruta de la satisfacción de cosechar tus propias frutillas, deleitándote con su dulzura y la belleza que aportan a tus plato.");
let producto50 = new Producto(207, "Huerta", "rúcula", ["Depto", "Casa"], "Interior", "Huerta", "../imagenes/imagenes_baseDatos/rucula.jpg", "Descubre la frescura y el sabor único de cultivar tu propia rúcula. Con su distintivo sabor a nuez y su textura crujiente, la rúcula es una adición perfecta a ensaladas y platos culinarios. Es fácil de cultivar en macetas o en el jardín, incluso en espacios reducidos. Además de su delicioso sabor, la rúcula es rica en vitaminas, minerales y antioxidantes. Cultivar rúcula te permite disfrutar de hojas frescas y nutritivas en cualquier momento. Embárcate en esta experiencia y disfruta de la satisfacción de cosechar tu propia rúcula, añadiendo un toque de frescura y vitalidad a tus comidas.");
// familia hiervas 
let producto25 = new Producto(300, "Hierbas", "perejil", "Depto", "Exterior", "Huerta", "../imagenes/imagenes_baseDatos/perejil.png", "El perejil, una hierba aromática de hojas rizadas y verde intenso, es fácil de cultivar en tu jardín o maceta. Su sabor fresco y ligeramente picante lo convierte en un ingrediente esencial en numerosas recetas. Además de agregar sabor a tus platos, el perejil es rico en vitaminas A, C y K, así como en minerales como el hierro y el potasio. También se le atribuyen propiedades antioxidantes y antiinflamatorias. Asegúrate de proporcionarle suficiente luz solar y agua regularmente para obtener un perejil abundante y sabroso en tu huerto.");
let producto26 = new Producto(301, "Hierbas", "menta", ["Depto", "Casa"], "Interior", "Huerta", "../imagenes/imagenes_baseDatos/menta.jpg", "Sus hojas verdes y brillantes tienen un aroma distintivo y un sabor mentolado. Además de ser un excelente complemento para infusiones y cócteles, la menta tiene propiedades digestivas y calmantes. Ayuda a aliviar el malestar estomacal y el estrés. También es rica en antioxidantes y vitaminas A y C. La menta crece rápidamente y se adapta bien a diferentes condiciones de luz y suelo. Asegúrate de mantenerla bien regada para disfrutar de su frescura y sabor durante todo el año.");
let producto27 = new Producto(302, "Hierbas", "romero", "Depto", "Exterior", "Huerta", "../imagenes/imagenes_baseDatos/romero.png", "El romero, una hierba perenne con hojas estrechas y fragantes, es una joya en cualquier jardín o maceta. Su aroma distintivo y su sabor terroso lo convierten en un ingrediente esencial en la cocina mediterránea. Además de realzar el sabor de tus platos, el romero posee propiedades antioxidantes y antiinflamatorias, y se cree que mejora la concentración y la memoria. Esta planta resistente prospera en climas cálidos y soleados, y requiere un suelo bien drenado. Sus pequeñas flores azules son un atractivo adicional para las abejas y otros polinizadores. Cultivar romero te brindará una fuente constante de sabor y bienestar en tu hogar.");
let producto28 = new Producto(303, "Hierbas", "cilantro", "Depto", "Exterior", "Huerta", "../imagenes/imagenes_baseDatos/cilantro.png", "El cilantro, una hierba versátil con hojas frescas y semillas aromáticas, es un tesoro culinario y medicinal. Sus hojas de sabor único, agridulce y ligeramente cítrico, son indispensables en la cocina mexicana y asiática. Además de su delicioso sabor, el cilantro contiene compuestos antioxidantes y posee propiedades digestivas y antiinflamatorias. Sus semillas, conocidas como coriandro, también se utilizan en la cocina y tienen un aroma especiado. El cilantro es fácil de cultivar en tu jardín o maceta, preferentemente en climas frescos. Asegúrate de proporcionarle suficiente agua y sol parcial para disfrutar de su frescura y beneficios en tus platos favoritos.");
let producto29 = new Producto(304, "Hierbas", "albahaca", ["Depto", "Casa"], "Interior", "Huerta", "../imagenes/imagenes_baseDatos/albahaca.png", "Es un verdadero tesoro en la cocina y el jardín. Sus hojas de color verde brillante tienen un sabor dulce y ligeramente picante, que añade un toque especial a cualquier plato. Además de su delicioso aroma, la albahaca posee propiedades antiinflamatorias y antioxidantes. También se le atribuyen propiedades antimicrobianas y beneficios para la digestión. Esta planta fácil de cultivar prefiere climas cálidos y soleados, y prospera en macetas o en el jardín. Mantén el suelo húmedo y cosecha las hojas regularmente para disfrutar de su frescura en salsas, ensaladas y platos italianos.");
let producto30 = new Producto(305, "Hierbas", "lavanda", ["Depto", "Casa"], "Exterior", "Deco", "../imagenes/imagenes_baseDatos/lavanda.png", "La lavanda, una planta aromática y hermosa, es un verdadero regalo para los sentidos. Sus flores de tonos morados y azules emanan un aroma relajante y reconfortante. Además de su fragancia encantadora, la lavanda posee propiedades calmantes y sedantes, siendo ampliamente utilizada en aromaterapia y productos para el cuidado personal. Sus aceites esenciales tienen propiedades antibacterianas y antiinflamatorias. Cultivar lavanda en tu jardín o maceta es fácil, ya que es resistente y requiere poco mantenimiento. Disfruta de sus flores y aceites esenciales para crear un ambiente tranquilo y promover el bienestar en tu hogar.");
// familia trepadoras
let producto31 = new Producto(400, "Trepadoras", "potus", "Depto", "Interior", "Deco", "../imagenes/imagenes_baseDatos/potus.png", "Descubre la belleza y la resistencia del Potus. Con sus hojas exuberantes y su fácil cuidado, el Potus es una planta popular en interiores. Se adapta a diferentes condiciones de iluminación y es ideal para principiantes en jardinería. Además, el Potus purifica el aire al absorber toxinas y liberar oxígeno. Embellece tu hogar con esta planta de bajo mantenimiento y disfruta de sus beneficios para la salud. Añade un toque de verdor y frescura con el Potus, una elección perfecta para aquellos que desean tener una planta hermosa y fácil de cuidar en su espacio.");
let producto32 = new Producto(401, "Trepadoras", "hiedra inglesa", "Depto", "Interior", "Deco", "../imagenes/imagenes_baseDatos/hiedra_inglesa.jpg", "La hiedra inglesa, una planta trepadora de hojas perennes y exuberantes, es una adición encantadora a cualquier jardín o fachada. Sus hojas en forma de corazón y su crecimiento rápido hacen que sea ideal para cubrir paredes, cercas y estructuras. Además de su belleza estética, la hiedra inglesa ayuda a purificar el aire y a reducir el ruido. También proporciona refugio y alimento para la vida silvestre. Esta planta resistente se adapta a diferentes condiciones de luz y suelo, aunque prefiere la sombra parcial y suelos bien drenados. Cultivar hiedra inglesa te brindará un verdadero oasis verde en tu entorno y un hogar acogedor para la naturaleza.");
let producto33 = new Producto(402, "Trepadoras", "jazmin", ["Depto", "Casa"], "Exterior", "Deco", "../imagenes/imagenes_baseDatos/jazmin.jpg", "Sus flores blancas o amarillas desprenden un aroma embriagador que llena el aire con su dulzura. Además de su fragancia encantadora, el jazmín posee propiedades relajantes y calmantes, siendo utilizado en aromaterapia y productos de cuidado personal. También se le atribuyen propiedades antioxidantes y antiinflamatorias. Esta planta trepadora es ideal para embellecer pérgolas, vallas y jardines, preferentemente en climas cálidos. Disfruta de la belleza y el aroma del jazmín, creando un ambiente sereno y romántico en tu entorno.");
let producto34 = new Producto(403, "Trepadoras", "madreselva", "Depto", "Interior", "Deco", "../imagenes/imagenes_baseDatos/madreselva.jpg", "Sus flores en forma de trompeta, generalmente en tonos rosados, blancos o amarillos, llenan el aire con su dulce perfume. Además de su belleza floral, la madreselva atrae a mariposas y colibríes con su néctar. Esta planta trepadora es resistente y de rápido crecimiento, ideal para cubrir vallas, pérgolas y muros. Además, se le atribuyen propiedades antiinflamatorias y antioxidantes. Cultivar madreselva en tu jardín te brindará una hermosa vista y un regalo para tus sentidos.");
let producto35 = new Producto(404, "Trepadoras", "rosas trepadoras", "Casa", "Exterior", "Deco", "../imagenes/imagenes_baseDatos/rosa_trepadora.jpg", "La rosa trepadora, una belleza enredadera, añade elegancia y encanto a cualquier espacio exterior. Sus tallos largos y flexibles se adhieren a estructuras y trellises, creando un espectáculo de flores en cascada. Con una amplia variedad de colores y fragancias, las rosas trepadoras son verdaderas joyas en el jardín. Su crecimiento vigoroso y resistencia las convierten en una opción ideal para cubrir muros, cercas y pérgolas. Cultivar rosas trepadoras te brinda la oportunidad de disfrutar de su fragancia y belleza mientras transformas tu espacio exterior en un oasis de romance y serenidad.");
let producto36 = new Producto(405, "Trepadoras", "campsis", "Casa", "Exterior", "Deco", "../imagenes/imagenes_baseDatos/campsis.jpg", "Sus flores tubulares de colores brillantes, como el rojo, el naranja y el amarillo, atraen la atención de todos. Con su rápido crecimiento y tallos trepadores, el campsis es perfecto para cubrir muros, vallas y pérgolas. Además de su belleza, esta enredadera es resistente y de bajo mantenimiento. El campsis también atrae a los colibríes con su abundante néctar. Disfruta de su espectacular exhibición floral y embellece tu jardín con esta enredadera de impacto visual.");
// familia jardin
let producto37 = new Producto(500, "Jardin", "rosa", "Casa", "Exterior", "Deco", "../imagenes/imagenes_baseDatos/rosa.jpg", "La rosa, la reina de las flores, es un símbolo de belleza y elegancia en el mundo vegetal. Con una amplia variedad de colores, formas y fragancias, las rosas cautivan nuestros sentidos. Estas flores perennes son resistentes y se adaptan a diferentes climas y suelos. Con su delicadeza y resistencia, las rosas son ideales para embellecer jardines, arriates y ramos. Cultivar rosas te brinda la oportunidad de disfrutar de su gracia atemporal y añadir un toque romántico a tu entorno.");
let producto38 = new Producto(501, "Jardin", "helecho", ["Depto", "Casa"], "Interior", "Deco", "../imagenes/imagenes_baseDatos/helecho.png", "El helecho, una planta fascinante y exuberante, añade un toque de naturaleza primitiva a cualquier espacio. Sus frondas verdes y delicadas crean una apariencia elegante y relajante. Son plantas resistentes que prosperan en ambientes de sombra y humedad. Algunas variedades de helechos también se utilizan en la medicina herbal por sus propiedades antioxidantes y antiinflamatorias. Añade un toque de frescura y sofisticación con los helechos en tu hogar u oficina, y disfruta de su serenidad y beneficios para la salud.");
let producto39 = new Producto(502, "Jardin", "margarita", "Casa", "Exterior", "Deco", "../imagenes/imagenes_baseDatos/margarita.png", "La margarita, una flor radiante y alegre, ilumina cualquier jardín con su belleza y encanto. Sus pétalos blancos o de colores brillantes rodean un centro amarillo brillante, creando una imagen de pura felicidad. Las margaritas son conocidas por su resistencia y capacidad para florecer en diversas condiciones climáticas. Además de su apariencia encantadora, estas flores poseen propiedades medicinales, como aliviar la inflamación y calmar los nervios. Las margaritas también atraen a las abejas y otros polinizadores, contribuyendo a la salud y la biodiversidad del jardín. Disfruta de la simplicidad y la alegría que las margaritas aportan a tu entorno, y déjate envolver por su encanto natural.");
let producto40 = new Producto(503, "Jardin", "alegría del hogar", ["Depto", "Casa"], "Exterior", "Deco", "../imagenes/imagenes_baseDatos/alegria_del_hogar.jpg", "Su aspecto exuberante y su forma compacta la convierten en una elección popular para la decoración interior. Además de su belleza estética, la Alegría del Hogar purifica el aire al absorber toxinas y liberar oxígeno. Esta planta tropical es resistente y de bajo mantenimiento, lo que la hace perfecta para aquellos con habilidades de jardinería limitadas. También se cree que la Alegría del Hogar tiene propiedades calmantes y mejora el estado de ánimo. Dale vida a tu hogar con esta planta encantadora y disfruta de su presencia relajante y positiva.");
let producto41 = new Producto(504, "Jardin", "geranios", ["Depto", "Casa"], "Exterior", "Deco", "../imagenes/imagenes_baseDatos/geranios.png", "El geranio, una planta colorida y versátil, es un verdadero atractivo en cualquier jardín o maceta. Además de su aspecto encantador, el geranio es resistente y de fácil cuidado, siendo ideal para jardineros principiantes. Sus hojas emiten un aroma agradable cuando se frotan, y se cree que tienen propiedades repelentes de insectos. También se utilizan en la medicina herbal por sus propiedades astringentes y antiinflamatorias. Cultivar geranios te brinda una explosión de color y alegría en tu espacio exterior, además de beneficios adicionales para tu bienestar.");
let producto42 = new Producto(505, "Jardin", "Jardin", ["Depto", "Casa"], "Exterior", "Deco", "../imagenes/imagenes_baseDatos/lirio.jpg", "El lirio, una flor majestuosa y elegante, es un verdadero símbolo de belleza y pureza. Sus pétalos suaves y delicados se despliegan en una variedad de colores y patrones, creando una vista deslumbrante en cualquier jardín. Además de su apariencia impresionante, los lirios emiten una fragancia cautivadora que llena el aire con su dulzura. Estas flores perennes son resistentes y fáciles de cultivar, aportando encanto y sofisticación a cualquier espacio. Además, se les atribuyen propiedades medicinales, como aliviar el dolor y promover la relajación. Embellece tu jardín y deleita tus sentidos con los lirios, una verdadera joya de la naturaleza.");
// familia interior 
let producto43 = new Producto(600, "Interior", "costilla de adán", ["Depto", "Casa"], "Interior", "Deco", "../imagenes/imagenes_baseDatos/costillas_de_adan.png", "La Costilla de Adán, una planta exótica y llamativa, es una verdadera belleza tropical. Sus hojas grandes y onduladas, con sus distintivas perforaciones, añaden un toque de elegancia y sofisticación a cualquier espacio. Además de su apariencia impresionante, la Costilla de Adán es conocida por su capacidad de purificar el aire al absorber toxinas y liberar oxígeno. Esta planta resistente y de fácil cuidado es perfecta para interiores, donde agrega un toque de exotismo y frescura. También se cree que la Costilla de Adán tiene propiedades antialérgicas y mejora la calidad del sueño. Adorna tu hogar con esta planta cautivadora y disfruta de sus beneficios estéticos y para la salud.");
let producto44 = new Producto(601, "Interior", "ficus", "Depto", "Interior", "Deco", "../imagenes/imagenes_baseDatos/ficus.png", "Su follaje denso y frondoso crea un ambiente tropical y relajante. Además de su aspecto impresionante, el ficus es conocido por su capacidad para purificar el aire, eliminando toxinas y aumentando los niveles de oxígeno. Esta planta resistente y de fácil cuidado se adapta a diversas condiciones de luz y temperatura. También se cree que el ficus ayuda a reducir el estrés y mejora la calidad del sueño. Dale vida a tu hogar con el ficus y disfruta de su belleza natural y sus beneficios para el bienestar.");
let producto45 = new Producto(602, "Interior", "lengua de suegra", "Depto", "Interior", "Deco", "../imagenes/imagenes_baseDatos/lengua_de_suegra.png", "La lengua de suegra, también conocida como sansevieria, es una planta resistente y versátil que agrega un toque de elegancia a cualquier espacio. Sus hojas largas y puntiagudas, de color verde intenso o con patrones variegados, crean un aspecto único y llamativo. Es una planta de bajo mantenimiento, ideal para aquellos con poca experiencia en jardinería. También se cree que la lengua de suegra tiene propiedades medicinales, como aliviar el dolor de cabeza y mejorar la calidad del sueño.");
let producto46 = new Producto(603, "Interior", "cinta", ["Depto", "Casa"], "Interior", "Deco", "../imagenes/imagenes_baseDatos/cintas.png", "La cinta, también conocida como planta araña, es una belleza colgante que aporta un toque de frescura y encanto a cualquier espacio. Sus hojas largas y delgadas, de color verde intenso o con patrones variegados, crean un efecto decorativo único. Es una planta de bajo mantenimiento y tolerante a la falta de luz, ideal para interiores. También se cree que la cinta tiene propiedades relajantes y puede ayudar a reducir el estrés. Decora tu hogar con la cinta y disfruta de su belleza natural y sus beneficios para el bienestar.");
let producto47 = new Producto(604, "Interior", "anturio rojo", "Depto", "Interior", "Deco", "../imagenes/imagenes_baseDatos/anturio_rojo.png", "El anturio rojo, una planta tropical y cautivadora. Sus brillantes flores en forma de corazón, de intenso color rojo, crean un impacto visual impresionante. Además de su belleza, el anturio rojo es conocido por mejorar la calidad del aire al absorber sustancias tóxicas y liberar oxígeno. Es una planta de fácil cuidado y bajo mantenimiento, perfecta para interiores. También se cree que el anturio rojo aporta energía positiva y simboliza el amor y la pasión.");
let producto48 = new Producto(605, "Interior", "orquídea", ["Depto", "Casa"], "Interior", "Deco", "../imagenes/imagenes_baseDatos/orquidea.png", "Sus flores delicadas y coloridas son sinónimo de belleza y sofisticación. Con una amplia variedad de colores, formas y tamaños, las orquídeas son verdaderas obras de arte vivientes. Además de su apariencia deslumbrante, las orquídeas tienen propiedades purificadoras del aire, ayudando a mejorar la calidad del entorno interior. Estas flores requieren cuidado especializado, pero recompensan con su larga duración y flores recurrentes. Cultivar orquídeas es un pasatiempo fascinante y gratificante. Adorna tu hogar con la elegancia y la distinción de las orquídeas y disfruta de su belleza y encanto duraderos.");

// cargo los datos de la falsa base de datos automaticamente a un array donde por el momento se van a guardar todos los productos
for (let i = 1; i < 51; i++) {
    var variableVariable = `producto${i}`;//creo una variable donde uso la i para que valla variando

    let nombreVariable = variableVariable.replace(/"/g, ""); // Elimino las comillas del string
    let variable = eval(nombreVariable); // Evaluo el string como una variable
    plantas.push(variable);
}

localStorage.setItem("plantas", JSON.stringify(plantas));  //cargo al localStorage la base de datos con la llave plantas