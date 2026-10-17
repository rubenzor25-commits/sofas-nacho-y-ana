# Sofás para Mani (y Ana)

Página para que Nacho (alias *Mani*, de *manifestación*) y Ana elijan sofá: sofás de **3 plazas** entre **300 € y 750 €**, con prioridad para los de **asientos deslizantes**, en tiendas con local en la Comunidad de Madrid (Alcalá de Henares y alrededores).

- Filtros por tienda, tipo (deslizante, reclinable, cama, chaise longue), precio máximo y orden.
- Favoritos con el corazón (se guardan en el navegador de cada uno).
- Cada sofá enlaza a su ficha en la tienda y lleva una frase de Mani.
- Lista de tiendas físicas con enlace a Google Maps.

Publicada en https://rubenzor25-commits.github.io/sofas-nacho-y-ana/

## Actualizar

Los datos salen de la investigación en `../investigacion/` (un JSON por tienda). Para regenerarlos y publicar:

```bash
cd ../investigacion && python3 -I combinar.py
cd ../web && npm run build && npm run deploy
```

Los precios se consultaron el 17/10/2026 y pueden cambiar; las imágenes se cargan desde la web de cada tienda.
