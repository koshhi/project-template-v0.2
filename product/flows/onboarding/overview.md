---
title: Onboarding Flow Overview
status: active
owner: pm
last_updated: 2026-05-01
source_of_truth: true
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

El onboarding es el primer flujo crítico del producto. Su objetivo es llevar al usuario desde la primera visita hasta un estado inicial de activación con la menor fricción posible.

# Objetivo

Conseguir que un usuario nuevo:
- cree una cuenta o acceda de forma segura
- entienda el valor inicial del producto
- complete el primer paso útil dentro de la app

# Alcance

Incluye:
- entrada desde landing o invitación
- creación de cuenta o login
- validación mínima de identidad
- primera pantalla guiada dentro de la aplicación

No incluye:
- billing
- configuración avanzada
- personalización profunda del workspace

# Criterios de éxito

- el flujo puede completarse sin intervención manual
- el usuario entiende qué hacer después del alta
- el sistema deja trazabilidad suficiente para soporte y analytics

# Dependencias

- estrategia de autenticación definida
- diseño base de formularios y estados
- eventos mínimos de analytics instrumentados

# Decisiones abiertas

- si conviene magic link, password o ambos en la primera iteración
- cuánto perfilado pedir antes del primer momento de valor

# Enlaces relacionados

- `management/phases/2026-Q2_onboarding-foundation/brief.md`
- `management/phases/2026-Q2_onboarding-foundation/plan.md`
- `management/phases/2026-Q2_onboarding-foundation/status.md`
- `docs/architecture/decisions/2026-04-20_auth-strategy.md`
