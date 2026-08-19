# Quarto projects

This directory contains the editable sources for the site's locally hosted
Quarto presentations. The deployment workflow renders every immediate child
directory containing `_quarto.yml` and publishes its `_output` directory at:

```text
/presentations/<project-name>/
```

The rendered files under `static/presentations/` remain tracked so a normal
local Hugo build works without requiring Quarto. After editing a project,
render it and copy its `_output` contents to the matching static directory
before committing. The deployment workflow also renders the sources afresh so
the published site cannot drift from them.
