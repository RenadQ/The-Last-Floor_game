# The Last Floor Refactor

This package contains a refactored Expo project based on the supplied single-file source.

## What changed

- Added structured folders for navigation, context, utils, screens, components, styles, and assets.
- Fixed pause exit flow to fully reset the run and return to the hub without using Alert for logic.
- Reworked delete account to wipe AsyncStorage and the fallback memory store.
- Added settings toggle for elevator questions.
- Replaced the elevator riddle flow with local multiple-choice questions.
- Kept the visual theme and original gameplay logic in the main game screen file.

## Important

Copy your existing asset files into `src/assets` or update the require paths if you prefer the project root `assets` folder.
