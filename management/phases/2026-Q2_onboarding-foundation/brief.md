---
title: Q2 Onboarding Foundation Brief
status: active
owner: pm
last_updated: 2026-05-01
source_of_truth: false
related_feature: authentication
related_flow: onboarding
related_phase: 2026-Q2_onboarding-foundation
related_decisions:
  - 2026-04-20_auth-strategy
related_issues:
  - 142
  - 143
related_prs:
superseded_by:
---

# Contexto

La fase existe para convertir el flujo de onboarding en una primera experiencia ejecutable de extremo a extremo, con foco en reducir fricción y aclarar el camino de activación.

# Objetivo de la fase

Entregar una base funcional de onboarding que conecte identidad, primer acceso y primera acción guiada del usuario.

# Por Qué Ahora

- el producto necesita una entrada usable para testear activación real
- las decisiones de autenticación condicionan el resto del flujo
- diseño y desarrollo necesitan un marco compartido de ejecución

# Dependencias

- flow `product/flows/onboarding/overview.md`
- ADR `docs/architecture/decisions/2026-04-20_auth-strategy.md`
- guidelines en `design/guidelines/`

# Riesgos

- pedir demasiado contexto al usuario en el alta
- acoplar onboarding a configuraciones todavía no definidas
- introducir autenticación compleja antes de validar el flujo base

# Documentos que Leer Primero

- `PROJECT_MAP.md`
- `product/flows/onboarding/overview.md`
- `docs/architecture/decisions/2026-04-20_auth-strategy.md`

# Enlaces Relacionados

- `management/phases/2026-Q2_onboarding-foundation/plan.md`
- `management/phases/2026-Q2_onboarding-foundation/status.md`
- `management/phases/2026-Q2_onboarding-foundation/retro.md`
