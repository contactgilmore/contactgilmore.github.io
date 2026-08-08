# Handoff and Recovery

Fresh GPT work begins from `00_MASTER` authority, not chat memory.

Before production cutover, record exact old `main` head and candidate head. If the new deployment fails, recovery should use Git branch/ref history and a deliberate rollback rather than manual reconstruction.

Sprint notes preserve bounded execution history; Git preserves source history.