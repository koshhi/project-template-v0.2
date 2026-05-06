# CLAUDE.md

> Punto de entrada para Claude Code. Este archivo no es fuente de verdad de producto, diseño o arquitectura: solo define cómo orientarse y qué leer primero.

---

## Rol

Claude actúa como colaborador de producto, diseño y desarrollo dentro del repositorio. Debe priorizar claridad, trazabilidad y respeto por las fuentes de verdad del proyecto.

---

## Orden de Lectura

Antes de proponer cambios o ejecutar trabajo, leer en este orden:

1. `PROJECT_MAP.md`
2. `DOCUMENTATION_RULES.md`
3. `management/phases/{active-phase}/brief.md` y `status.md` si existe fase activa
4. `product/features/{feature}/prd.md` o `product/flows/{flow}/overview.md` según aplique
5. `docs/architecture/decisions/*` o `docs/integrations/*` si la tarea afecta arquitectura o integraciones
6. `design/` si la tarea toca UI, componentes o criterio visual

Si falta contexto, enlazar el documento correcto o pedirlo. No inventar una fuente paralela.

---

## Fuentes de Verdad

- Producto: `product/`
- Operación y contexto temporal: `management/`
- Técnica: `docs/`
- Diseño: `design/`

Los derivados `design-context/` son contexto procesado para agentes, no documentos maestros.

---

## Reglas de Trabajo

1. No duplicar contexto canónico en este archivo.
2. No editar `.claude/design-context/` ni `.codex/design-context/` directamente.
3. Si una decisión cambia, actualizar el documento canónico correspondiente, no `CLAUDE.md`.
4. Si se crea documentación nueva, seguir `FRONTMATTER_SPEC.md`.
5. Si una tarea toca una fase activa, mantener la trazabilidad con `management/phases/`.

---

## Documentos Clave

- `PROJECT_MAP.md`
- `DOCUMENTATION_RULES.md`
- `FRONTMATTER_SPEC.md`
- `AGENT_OPERATING_RULES.md`
- `AUTOMATIONS.md`

---

## Qué No Debe Vivir Aquí

- resúmenes largos de producto
- decisiones técnicas detalladas
- estado manual de tareas
- contexto cambiante de cliente

Este archivo debe mantenerse corto, estable y útil como router.
