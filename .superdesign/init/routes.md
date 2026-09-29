# Routes and screen states

This Vite React SPA uses state-based navigation rather than React Router.

| Screen | State | Component |
|---|---|---|
| Curriculum map | `currentView = map` | `src/App.jsx` + `ZoneCard` |
| Lesson zone | `currentView = zone` | `src/components/ZoneView.jsx` |
| Timo arena | `currentView = timo_arena` | `src/components/TimoArena.jsx` |
| Rewards | `currentView = trophies` | `src/components/TrophyRoom.jsx` |
| Parent portal | `currentView = parents` | `src/components/ParentPortal.jsx` |

The requested target is the Grade 1 lesson zone `counting_numbers_10`, rendered by `ZoneView` and `InteractiveCanvas` with data from `src/data/curriculumGrade1.js`.

