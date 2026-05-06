# Project Scaffold

> Arquitectura de referencia para proyectos con equipos de diseño, dev, PM y clientes vía IDE y GitHub.

---

## Raíz del proyecto

```txt
CLAUDE.md                      # Instrucciones globales para el agente Claude
AGENTS.md                      # Instrucciones multi-agente base
AGENTS.override.md             # Overrides por entorno o persona (git-ignored)
PROJECT_MAP.md                 # Mapa del proyecto · actualizable via hook
DOCUMENTATION_RULES.md         # Reglas globales de documentación y source of truth
FRONTMATTER_SPEC.md            # Metadatos obligatorios y campos recomendados
AUTOMATIONS.md                 # Qué documentos se generan o sincronizan automáticamente
AGENT_OPERATING_RULES.md       # Secuencia de lectura y límites de los agentes
PROJECT_BOOTSTRAP.md           # Cómo inicializar un proyecto real desde este template
NEW_PROJECT_CHECKLIST.md       # Checklist operativo de arranque
.mcp.json                      # MCP servers del proyecto (repo root)
```

> `DOCUMENTATION_RULES.md`, `FRONTMATTER_SPEC.md`, `AUTOMATIONS.md` y `AGENT_OPERATING_RULES.md` convierten el scaffold en un sistema operable y no solo en una estructura de carpetas.

> `CLAUDE.md` y `AGENTS.md` deben actuar como routers de contexto: cortos, estables y enlazados al sistema documental, no como resúmenes largos del proyecto.

> `PROJECT_MAP.md` es el índice operativo vivo: fases activas, rutas de lectura y documentos prioritarios. Es el primer archivo que deberían leer humanos y agentes al entrar.

---

## Configuración de agentes

### `.claude/` — Claude Code

```txt
.claude/
├── settings.json
├── settings.local.json        # git-ignored
├── agents/
│   └── *.md
├── rules/
│   └── *.md
├── commands/
│   └── <name>.md
├── skills/
│   └── {skill-name}/
│       ├── SKILL.md
│       └── supporting-files/
├── design-context/
│   └── design.md
├── hooks/
│   ├── scripts/
│   └── config/
└── plugins/
```

### `.codex/` — Codex / OpenAI

```txt
.codex/
├── settings.toml
├── hooks.json
├── agents/
│   └── <name>.toml
├── rules/
│   └── *.md
├── prompts/
│   └── *.md
├── design-context/
│   └── design.md
└── memories/
```

### `.agents/` — Skills para Codex

```txt
.agents/
└── {skill-name}/
    ├── SKILL.md
    ├── scripts/
    ├── references/
    ├── assets/
    └── ...
```

---

## Diseño

### `design/` — Fuente de verdad del equipo de diseño

> `design/` es la fuente de verdad visual. `.claude/design-context/` y `.codex/design-context/` son derivados procesados y nunca deben editarse directamente.

```txt
design/
├── guidelines/
│   ├── brand.md
│   ├── typography.md
│   └── colors.md
├── components/
│   └── *.md
├── decisions/
│   └── YYYY-MM-DD_tema.md
└── prototypes/
    └── *.md / links
```

---

## Producto

### `product/` — Definición del producto

```txt
product/
├── definition.md
├── roadmap.md
├── personas/
│   └── *.md
├── metrics/
│   ├── north-star.md
│   └── okrs/
│       └── YYYY-QQ.md
├── features/
│   └── {feature-name}/
│       ├── prd.md
│       ├── research.md
│       └── decisions.md
├── flows/
│   └── {flow-name}/
│       ├── overview.md
│       └── decisions.md
└── decisions/
    └── YYYY-MM-DD_tema.md
```

> `features/` modela capacidades del producto. `flows/` modela experiencias que atraviesan varias capacidades.

---

## Gestión

### `management/` — Proyecto y cliente

```txt
management/
├── product-diary/
│   └── *.md
├── transcriptions/
│   ├── internal/
│   │   └── YYYY-MM-DD_tema.md
│   └── client/
│       └── YYYY-MM-DD_cliente_tema.md
├── client-sessions/
│   └── YYYY-MM-DD_summary.md
└── phases/
    └── YYYY-Q{n}_{phase-name}/
        ├── brief.md
        ├── scope.md
        ├── plan.md
        ├── status.md
        └── retro.md
```

> `brief.md` explica contexto. `scope.md` define límites. `plan.md` describe enfoque de ejecución. `status.md` refleja estado vivo y debería sincronizarse automáticamente. `retro.md` conserva aprendizaje.

---

## Documentación técnica

### `docs/` — GitHub-first

```txt
docs/
├── README.md
├── architecture/
│   ├── overview.md
│   └── decisions/
│       └── YYYY-MM-DD_titulo.md
├── guides/
│   ├── getting-started.md
│   └── client-guide.md
├── api/
│   └── *.md
├── integrations/
│   └── *.md
├── traceability/
│   └── README.md
└── changelog/
    └── YYYY-MM-DD_version.md
```

---

## GitHub

### `.github/` — Workflows e issue templates

```txt
.github/
├── ISSUE_TEMPLATE/
│   ├── bug-report.md
│   ├── client-feedback.md
│   ├── question.md
│   ├── discovery-task.md
│   ├── design-task.md
│   └── dev-task.md
└── workflows/
    └── *.yml
```

---

## Scripts

### `scripts/` — Automatizaciones del proyecto

```txt
scripts/
├── sync-design-context.js
├── generate-project-map.js
├── sync-phase-status.js
├── validate-frontmatter.js
└── *.js
```

---

## Templates

### `templates/` — Plantillas canónicas del proyecto

```txt
templates/
├── README.md
├── prd.md
├── phase-brief.md
├── phase-plan.md
├── adr.md
└── client-session-summary.md
```

---

## Operaciones

### `ops/` — Convenciones y operativa transversal

```txt
ops/
├── conventions/
├── automations/
└── prompts/
```

---

## Archivo

### `archive/` — Histórico explícito

```txt
archive/
├── phases/
├── decisions/
└── research/
```

---

## Codebase

```txt
frontend/
└── ...

backend/
└── ...

landing/
└── ...

{service-name}/
└── ...
```

---

## Frontmatter

Los documentos estructurales del proyecto deberían seguir `FRONTMATTER_SPEC.md`.

Campos mínimos:

```yaml
---
title:
status: draft|active|superseded|archived
owner:
last_updated:
source_of_truth: true|false
---
```

---

## Trazabilidad

Todo documento importante debería enlazar, cuando aplique:
- feature o flow relacionado
- fase relacionada
- decisión de producto o arquitectura relacionada
- issues
- PRs
- changelog

---

## Convenciones de nombrado

|Tipo|Patrón|
|---|---|
|Transcripciones internas|`YYYY-MM-DD_tema.md`|
|Transcripciones con cliente|`YYYY-MM-DD_cliente_tema.md`|
|Client sessions|`YYYY-MM-DD_summary.md`|
|ADRs técnicos|`YYYY-MM-DD_titulo.md`|
|Decisiones de producto|`YYYY-MM-DD_tema.md`|
|Decisiones de diseño|`YYYY-MM-DD_tema.md`|
|OKRs|`YYYY-QQ.md`|
|Changelog|`YYYY-MM-DD_version.md`|
|Fases|`YYYY-Q{n}_{phase-name}`|
