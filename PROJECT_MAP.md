# PROJECT_MAP.md

> Mapa operativo del proyecto. Este documento ayuda a humanos y agentes a orientarse rápido: qué está activo, qué leer primero y dónde vive cada fuente de verdad.

> Idealmente este archivo se genera o refresca automáticamente. Si queda desalineado con la realidad del repo, corregir la automatización antes de convertirlo en documento manual.

---

## Estado General

- Proyecto: `{project-name}`
- Etapa actual: `{discovery|design|implementation|stabilization|live}`
- Última actualización: `YYYY-MM-DD`
- Owner operativo: `{pm|tech-lead|founder|team}`

---

## Qué Leer Primero

Según el tipo de tarea:

- Contexto general: `product/definition.md` + `product/roadmap.md`
- Fase activa: `management/phases/{active-phase}/brief.md` + `status.md`
- Trabajo de producto: `product/features/{feature}/prd.md` o `product/flows/{flow}/overview.md`
- Trabajo técnico: `docs/architecture/overview.md` + ADRs relevantes
- Trabajo visual: `design/guidelines/` + `design/components/`
- Reglas de documentación: `DOCUMENTATION_RULES.md` + `FRONTMATTER_SPEC.md`

---

## Fases Activas

### `2026-Q2_onboarding-foundation`

- Estado: `active`
- Objetivo: definir y construir la base del onboarding inicial
- Brief: `management/phases/2026-Q2_onboarding-foundation/brief.md`
- Status: `management/phases/2026-Q2_onboarding-foundation/status.md`
- Plan: `management/phases/2026-Q2_onboarding-foundation/plan.md`
- PRD relacionado: `product/flows/onboarding/overview.md`
- ADRs relacionados:
  - `docs/architecture/decisions/2026-04-20_auth-strategy.md`
- Issues clave:
  - `#142`
  - `#143`

### `2026-Q2_design-system-alignment`

- Estado: `active`
- Objetivo: consolidar guidelines, componentes base y criterios visuales comunes
- Brief: `management/phases/2026-Q2_design-system-alignment/brief.md`
- Status: `management/phases/2026-Q2_design-system-alignment/status.md`
- Plan: `management/phases/2026-Q2_design-system-alignment/plan.md`
- Diseño relacionado:
  - `design/guidelines/brand.md`
  - `design/guidelines/typography.md`
  - `design/components/`

---

## Features y Flows Prioritarios

### Features

- `authentication`
- `billing`
- `editor`

### Flows

- `onboarding`
- `activation`
- `account-recovery`

---

## Documentos Canónicos

### Producto

- `product/definition.md`
- `product/roadmap.md`
- `product/features/*/prd.md`
- `product/flows/*/overview.md`

### Gestión

- `management/client-sessions/*.md`
- `management/phases/*/brief.md`
- `management/phases/*/status.md`

### Técnica

- `docs/architecture/overview.md`
- `docs/architecture/decisions/*.md`
- `docs/integrations/*.md`

### Diseño

- `design/guidelines/*.md`
- `design/components/*.md`
- `design/decisions/*.md`

---

## Riesgos o Bloqueos Actuales

- `{riesgo-1}`
- `{riesgo-2}`
- `{bloqueo-1}`

---

## Últimas Decisiones Relevantes

- `2026-04-20` · estrategia de autenticación definida
- `2026-04-28` · alcance inicial del onboarding reducido para MVP
- `2026-04-30` · sistema visual base unificado entre marketing y app

---

## Automatización Esperada

Este documento debería poder derivarse, al menos en parte, de:
- frontmatter de documentos activos
- carpetas de `management/phases/`
- issues y PRs relevantes
- changelog reciente

Si se automatiza, mantener la estructura estable para no romper el boot sequence de los agentes.
