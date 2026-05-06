# Frontmatter Spec

> Especificación mínima para indexar y automatizar documentación estructural.

```yaml
---
title:
status: draft|active|superseded|archived
owner:
last_updated:
source_of_truth: true|false
related_feature:
related_flow:
related_phase:
related_decisions:
related_issues:
related_prs:
superseded_by:
---
```

Reglas:
1. `source_of_truth: true` solo cuando realmente sea canónico.
2. `last_updated` debe reflejar cambios sustantivos.
3. Si algo queda obsoleto, actualizar `status` y `superseded_by`.
