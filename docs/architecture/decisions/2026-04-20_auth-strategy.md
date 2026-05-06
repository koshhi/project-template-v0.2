---
title: Authentication Strategy for Initial Onboarding
status: active
owner: tech-lead
last_updated: 2026-05-01
source_of_truth: true
related_feature: authentication
related_flow: onboarding
related_phase: 2026-Q2_onboarding-foundation
related_decisions:
related_issues:
  - 142
related_prs:
superseded_by:
---

# Contexto

El producto necesita una estrategia de autenticación suficientemente simple para acelerar la activación inicial, pero con base técnica razonable para iterar sin rehacer el flujo desde cero.

# Decisión

Para la primera iteración del onboarding:
- permitir acceso por email con password
- dejar preparado el sistema para introducir magic link más adelante
- separar claramente autenticación de perfilado y configuración posterior

# Consecuencias

- se reduce complejidad inicial de implementación
- el equipo puede validar el flujo base sin bloquearse por variantes de acceso
- puede haber fricción mayor que con magic link en algunos segmentos

# Alternativas Consideradas

## Magic link desde el inicio

Ventaja:
- menos fricción percibida

Desventaja:
- más dependencia de entregabilidad y flujos de email desde el día uno

## Social login desde el inicio

Ventaja:
- rapidez para algunos usuarios

Desventaja:
- añade complejidad de integración y soporte demasiado pronto

# Enlaces Relacionados

- `product/flows/onboarding/overview.md`
- `management/phases/2026-Q2_onboarding-foundation/brief.md`
- `management/phases/2026-Q2_onboarding-foundation/plan.md`
