# Project Template V0.2

> Scaffold documental y operativo para proyectos donde producto, diseño, desarrollo, cliente y agentes de IA comparten repositorio y contexto.

Este template no intenta ser un framework mágico ni una metodología cerrada. Su objetivo es más concreto: dar una base mínima y disciplinada para que el contexto del proyecto no quede repartido entre chats, prompts, reuniones y documentos sueltos.

Está pensado para proyectos que quieren:
- Reducir pérdida de contexto
- Hacer explícitas decisiones de producto y arquitectura
- Mejorar handoff entre personas y agentes
- Mantener trazabilidad entre estrategia, ejecución y código
- Evitar crear segundas fuentes de verdad

## Qué incluye

- Estructura base de carpetas para producto, gestión, diseño y documentación técnica
- Reglas documentales y jerarquía de fuentes de verdad
- Contrato de trabajo para Claude, Codex y otros agentes
- Guía de bootstrap para convertir el template en un proyecto real
- Checklist de arranque para no dejar placeholders ni ejemplos ficticios
- Templates e issue templates para trabajo repetible
- Ejemplo mínimo de flow, fase y ADR enlazados entre sí

## Cómo leer este repo

Si solo quieres entender el sistema, este es el orden recomendado:

1. [README.md](./README.md) (Documento actual)
2. [PROJECT_SCAFFOLD.md](./PROJECT_SCAFFOLD.md)
3. [PROJECT_MAP.md](./PROJECT_MAP.md)
4. [DOCUMENTATION_RULES.md](./DOCUMENTATION_RULES.md)
5. [AGENTS.md](./AGENTS.md)
6. [AGENT_OPERATING_RULES.md](./AGENT_OPERATING_RULES.md)
7. [PROJECT_BOOTSTRAP.md](./PROJECT_BOOTSTRAP.md)
8. [NEW_PROJECT_CHECKLIST.md](./NEW_PROJECT_CHECKLIST.md)

Si fueras arrancar un proyecto nuevo, empiezarías por:

1. [PROJECT_BOOTSTRAP.md](./PROJECT_BOOTSTRAP.md)
2. [NEW_PROJECT_CHECKLIST.md](./NEW_PROJECT_CHECKLIST.md)
3. [PROJECT_MAP.md](./PROJECT_MAP.md)
4. [docs/architecture/overview.md](./docs/architecture/overview.md)
5. [docs/traceability/README.md](./docs/traceability/README.md)

## Documentos principales

| Documento | Para qué sirve | Cuándo leerlo |
| --- | --- | --- |
| [PROJECT_SCAFFOLD.md](./PROJECT_SCAFFOLD.md) | Explica la arquitectura completa del repositorio y qué vive en cada carpeta. | Cuando quieras entender la estructura global del template. |
| [PROJECT_MAP.md](./PROJECT_MAP.md) | Actúa como índice operativo: qué está activo, qué leer primero y dónde está cada fuente de verdad. | Siempre al entrar en un proyecto. |
| [DOCUMENTATION_RULES.md](./DOCUMENTATION_RULES.md) | Define qué tipo de información va en cada sitio y cómo evitar duplicación. | Antes de crear o mover documentación. |
| [FRONTMATTER_SPEC.md](./FRONTMATTER_SPEC.md) | Especifica el frontmatter mínimo para indexar, automatizar y mantener trazabilidad. | Antes de crear documentos estructurales. |
| [AGENTS.md](./AGENTS.md) | Contrato multiagente: cómo coordinar Claude, Codex y otros agentes sin crear documentación paralela. | Cuando el proyecto vaya a trabajar con más de un agente. |
| [AGENT_OPERATING_RULES.md](./AGENT_OPERATING_RULES.md) | Define la secuencia de lectura, límites y reglas operativas concretas de los agentes. | Antes de ejecutar trabajo real con agentes. |
| [CLAUDE.md](./CLAUDE.md) | Punto de entrada para Claude Code; funciona como router de contexto, no como fuente de verdad. | Cuando Claude vaya a trabajar sobre el repo. |
| [AUTOMATIONS.md](./AUTOMATIONS.md) | Lista qué partes del sistema conviene automatizar para no depender de disciplina manual. | Cuando prepares scripts, CI o sincronizaciones. |
| [PROJECT_BOOTSTRAP.md](./PROJECT_BOOTSTRAP.md) | Guía paso a paso para convertir el template en un proyecto real. | Justo después de copiar el template. |
| [NEW_PROJECT_CHECKLIST.md](./NEW_PROJECT_CHECKLIST.md) | Checklist operativo para validar que el bootstrap quedó bien hecho. | Al final del arranque inicial y antes de empezar a trabajar. |

## Principios del template

- Una única fuente de verdad por tipo de información.
- Mejor enlazar que duplicar.
- Documentar para decidir y ejecutar, no para acumular texto.
- El estado vivo del proyecto debe ser localizable.
- Los agentes deben orientarse a documentos canónicos, no generar resúmenes paralelos.

## Trazabilidad

Una parte importante del template es que las decisiones no queden aisladas. La idea es poder seguir una cadena como esta:

`flow o PRD -> fase -> ADR -> issues o PRs`

La guía base está en [docs/traceability/README.md](./docs/traceability/README.md).

## GitHub y operación

El template ya incluye:

- issue templates en [`.github/ISSUE_TEMPLATE/`](./.github/ISSUE_TEMPLATE/)
- script inicial de bootstrap en [`scripts/bootstrap-project.js`](./scripts/bootstrap-project.js)
- plantillas base en [`templates/`](./templates/)

La automatización esperada está resumida en [AUTOMATIONS.md](./AUTOMATIONS.md).

## Qué debes cambiar al usarlo en un proyecto real

No copies este repositorio y empieces a trabajar sin adaptarlo. Como mínimo deberías:

1. Reemplazar placeholders globales.
2. Definir una primera fase real.
3. Crear `product/definition.md` y `product/roadmap.md`.
4. Sustituir el flow y el ADR de ejemplo si no aplican.
5. Ajustar [PROJECT_MAP.md](./PROJECT_MAP.md) a la realidad del proyecto.
6. Verificar frontmatter, enlaces internos y trazabilidad.

Los detalles están en [PROJECT_BOOTSTRAP.md](./PROJECT_BOOTSTRAP.md) y [NEW_PROJECT_CHECKLIST.md](./NEW_PROJECT_CHECKLIST.md).

## Estado de esta versión

`V0.2` es una versión endurecida del scaffold inicial. Mejora especialmente:

- claridad de fuentes de verdad
- secuencia de lectura para agentes
- trazabilidad entre documentos
- reglas de documentación
- preparación para automatizaciones futuras

No pretende cerrar el diseño final del sistema. Es una base para probar, iterar y simplificar donde haga falta.
