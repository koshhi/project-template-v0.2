# AGENTS.md

> Contrato multiagente del proyecto. Este archivo coordina cómo trabajan Claude, Codex y otros agentes, y a qué documentos deben remitirse.

---

## Objetivo

Los agentes deben funcionar como una red de ejecución disciplinada, no como autores de documentación paralela.

Este archivo define:
- responsabilidades generales
- límites
- reglas de handoff
- orden de consulta del contexto

Los detalles operativos viven en `AGENT_OPERATING_RULES.md`.

---

## Principio Base

Los agentes no deben resumir el proyecto entero dentro de `AGENTS.md`. Deben usar este archivo para orientarse hacia las fuentes correctas.

---

## Lectura Inicial

Todo agente que entre al proyecto debería empezar por:

1. `PROJECT_MAP.md`
2. `DOCUMENTATION_RULES.md`
3. `AGENT_OPERATING_RULES.md`
4. fase activa, PRD, flow o ADR relevante

---

## Responsabilidades

### Claude

Orientado a contexto, producto, documentación y ejecución general.

### Codex

Orientado a implementación, edición, validación y trabajo operativo en el repositorio.

### Otros agentes

Deben respetar exactamente las mismas fuentes de verdad y reglas documentales.

---

## Reglas Compartidas

1. No crear una segunda fuente de verdad.
2. No promover transcripciones a decisiones oficiales sin consolidarlas en el lugar correcto.
3. No duplicar PRDs, ADRs o briefs en archivos de instrucciones.
4. Enlazar siempre que sea posible en vez de copiar.
5. Si una tarea genera conocimiento estable, guardarlo en la carpeta adecuada.

---

## Handoff

Cuando un agente pase contexto a otro, debería incluir:

- objetivo actual
- fase o feature afectada
- documento canónico relevante
- decisiones ya tomadas
- bloqueos o riesgos
- siguiente acción recomendada

El handoff debe apuntar a documentos reales del proyecto, no solo a texto libre.

---

## Documentos de Referencia

- `PROJECT_MAP.md`
- `DOCUMENTATION_RULES.md`
- `FRONTMATTER_SPEC.md`
- `AGENT_OPERATING_RULES.md`
- `AUTOMATIONS.md`

---

## Qué No Debe Vivir Aquí

- estado vivo del proyecto
- decisiones de producto o arquitectura
- research
- notas de cliente

`AGENTS.md` coordina agentes; no reemplaza el sistema documental.
