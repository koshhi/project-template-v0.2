# Documentation Rules

> Reglas generales para mantener la documentación útil, trazable y operable.

---

## Principios

1. Cada documento debe tener un propósito claro.
2. Cada tipo de información debe tener una única fuente de verdad.
3. Documentar para decidir y ejecutar, no para acumular texto.
4. Los documentos obsoletos deben marcarse o archivarse.
5. Si hay mejor enlace que duplicación, enlazar.

---

## Qué Va Dónde

### `product/`

Guardar aquí:
- visión
- roadmap
- PRDs
- research
- decisiones de producto
- métricas

No guardar aquí:
- decisiones técnicas
- tracking operativo
- transcripciones

### `management/`

Guardar aquí:
- diario de producto
- transcripciones
- resúmenes de sesiones con cliente
- fases y su contexto operativo

No guardar aquí:
- PRDs canónicos
- ADRs
- documentación técnica estable

### `docs/`

Guardar aquí:
- arquitectura
- ADRs
- guías
- contratos de API
- integraciones
- changelog

### `design/`

Guardar aquí:
- guidelines
- componentes
- decisiones visuales
- prototipos

No editar directamente:
- `.claude/design-context/`
- `.codex/design-context/`

---

## Jerarquía de Fuentes

1. Fuente de verdad específica del dominio.
2. Documento procesado vigente.
3. Documento histórico o transcripción.

Ejemplos:
- `design/` manda sobre `design-context/`.
- `product/features/*/prd.md` manda sobre un `brief.md`.
- `docs/architecture/decisions/*` manda sobre notas dispersas.

---

## Estado y Ciclo de Vida

Estados recomendados:
- `draft`
- `active`
- `superseded`
- `archived`

Si un documento se reemplaza:
1. No borrar el histórico sin motivo.
2. Marcar el anterior.
3. Enlazar al nuevo.

---

## Trazabilidad

Siempre que tenga sentido, enlazar:
- phase → PRD o flow
- phase → issues y PRs
- ADR → feature o integración
- client session → decisiones impactadas
- changelog → fase o PR origen
