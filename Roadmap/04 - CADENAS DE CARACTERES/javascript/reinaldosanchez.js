// 1. Longitud
const cadena = "Moderación";
console.log(cadena.length); // 10

// 2. Acceso a caracteres
console.log(cadena[0]);      // "M"
console.log(cadena.charAt(1)); // "o"

// 3. Subcadenas (Slicing)
console.log(cadena.substring(0, 4)); // "Mode"
console.log(cadena.slice(-4));      // "ción"

// 4. Concatenación e Interpolación (Template Literals)
const saludo = "Hola";
const final = saludo + " Mundo"; // Tradicional
const interpolado = `${saludo}, bienvenido al sistema`; // Moderna

// 5. Conversión
console.log(cadena.toUpperCase()); // "MODERACIÓN"
console.log(cadena.toLowerCase()); // "moderación"

// 6. Repetición
console.log("Eco... ".repeat(3)); // "Eco... Eco... Eco... "

// 7. Reemplazo
const texto = "Esta noticia es falsa";
console.log(texto.replace("falsa", "verídica"));

// 8. División y Unión
const lista = "Economy,Sports,Society";
const array = lista.split(","); // ["Economy", "Sports", "Society"]
console.log(array.join(" | ")); // "Economy | Sports | Society"

// 9. Verificación
console.log(texto.includes("noticia")); // true
console.log(texto.startsWith("Esta"));  // true

// 10. Limpieza de espacios (Trim)
const sucio = "   texto con espacios   ";
console.log(sucio.trim()); // "texto con espacios"

//reto
function analizarPalabras(palabra1, palabra2) {
    // Normalización: minúsculas y quitar caracteres especiales/espacios
    const limpiar = (str) => str.toLowerCase().replace(/[\W_]/g, "");

    const p1 = limpiar(palabra1);
    const p2 = limpiar(palabra2);

    // 1. Palíndromo
    const esPalindromo = (str) => str === str.split("").reverse().join("");

    // 2. Anagrama
    const esAnagrama = (strA, strB) => {
        if (strA.length !== strB.length) return false;
        return strA.split("").sort().join("") === strB.split("").sort().join("");
    };

    // 3. Isograma (No hay letras repetidas)
    const esIsograma = (str) => new Set(str).size === str.length;

    console.log(`--- Resultados para "${palabra1}" y "${palabra2}" ---`);
    console.log(`¿"${palabra1}" es palíndromo?: ${esPalindromo(p1)}`);
    console.log(`¿"${palabra2}" es palíndromo?: ${esPalindromo(p2)}`);
    console.log(`¿Son anagramas?: ${esAnagrama(p1, p2)}`);
    console.log(`¿"${palabra1}" es isograma?: ${esIsograma(p1)}`);
    console.log(`¿"${palabra2}" es isograma?: ${esIsograma(p2)}`);
}

// Pruebas
analizarPalabras("Radar", "Ardar"); // Palíndromo y Anagrama
analizarPalabras("Acondicionar", "Isograma"); // Isograma falso y verdadero