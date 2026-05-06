# Project Bootstrap

> Cómo convertir este template en un proyecto real sin dejar placeholders ni estructura muerta.

---

## Objetivo

El bootstrap inicial debe dejar el proyecto en un estado usable para humanos y agentes:
- nombres reales
- fase inicial definida
- documentos de entrada enlazados
- carpetas mínimas creadas

---

## Orden Recomendado

1. Copiar `V0.2` a la nueva ubicación del proyecto.
2. Renombrar placeholders globales.
3. Definir una primera fase activa.
4. Sustituir el flow y ADR de ejemplo si no aplican.
5. Crear o ajustar `PROJECT_MAP.md`.
6. Revisar `CLAUDE.md` y `AGENTS.md`.
7. Validar frontmatter y enlaces.

---

## Placeholders a Reemplazar

Revisar y sustituir:
- `{project-name}`
- `{discovery|design|implementation|stabilization|live}`
- `{pm|tech-lead|founder|team}`
- `{feature-name}`
- `{flow-name}`
- `{phase-name}`
- `{service-name}`
- `YYYY-MM-DD`
- `2026-Q2_onboarding-foundation` si esa fase no aplica

---

## Documentos a Editar Primero

### Obligatorios

- `PROJECT_MAP.md`
- `product/definition.md`
- `product/roadmap.md`
- `management/phases/{phase}/brief.md`
- `management/phases/{phase}/scope.md`
- `management/phases/{phase}/plan.md`
- `docs/architecture/overview.md`

### Revisar si No Aplican

- `product/flows/onboarding/overview.md`
- `docs/architecture/decisions/2026-04-20_auth-strategy.md`

---

## Qué Conservar y Qué Reemplazar

Conservar:
- estructura de carpetas
- reglas documentales
- frontmatter
- templates
- issue templates

Reemplazar o adaptar:
- nombres de fases
- flow de ejemplo
- ADR de ejemplo
- riesgos, issues y decisiones ficticias

---

## Resultado Esperado

Al terminar el bootstrap:
- `PROJECT_MAP.md` apunta a fases y docs reales
- no quedan placeholders visibles
- la primera fase tiene brief, scope, plan y status
- hay al menos un documento canónico de producto
- hay al menos un documento técnico base

---

## Automatización

Si el proyecto se va a crear muchas veces, usar `scripts/bootstrap-project.js` como punto de partida para automatizar sustitución de placeholders y creación de archivos mínimos.
