# Traceability

> Esta carpeta explica cómo conectar estrategia, ejecución y código dentro del proyecto.

Reglas mínimas:
- cada fase debería apuntar a su PRD o flow
- cada ADR debería apuntar a la feature, flow o integración que afecta
- cada sesión de cliente debería enlazar decisiones o documentos impactados
- cada changelog debería poder rastrearse a fases, issues o PRs

Ejemplo de cadena trazable:

`product/flows/onboarding/overview.md`
→ `management/phases/2026-Q2_onboarding-foundation/brief.md`
→ `docs/architecture/decisions/2026-04-20_auth-strategy.md`
→ issues `#142`, `#143`
