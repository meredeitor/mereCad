# MereCad

Editor de planos arquitectónicos PWA desarrollado con HTML, CSS y JavaScript puro.

## Funciones principales

- Dibujo de muros, habitaciones, puertas, ventanas y cotas.
- Biblioteca paramétrica de mobiliario y símbolos arquitectónicos.
- Zoom al puntero y desplazamiento con la rueda central.
- Selección múltiple, alineación, agrupación, rotación y portapapeles.
- Firebase Authentication y CRUD de planos en Firestore.
- Borrador local para trabajo sin conexión.

Los planos de MereCad se guardan en la colección `merecad_planos` y se aíslan por `ownerId` mediante las reglas incluidas en `firestore.rules`.
