# Extractable components

## Navbar
- Source: `src/components/Navbar.jsx`
- Category: layout
- Description: persistent grade selector, navigation, account and audio controls.
- Extractable props: `currentView`, `selectedGrade`, `stars`, `accountName`.
- Hardcoded: menu labels, Lucide icons, amber/orange shell styling.

## ZoneCard
- Source: `src/components/ZoneCard.jsx`
- Category: basic
- Description: reusable curriculum topic card with icon and progress.
- Extractable props: `zone`, `completedCount`.
- Hardcoded: card structure, progress label and tactile interaction.

## FloatingPetCompanion
- Source: `src/components/FloatingPetCompanion.jsx`
- Category: basic
- Description: draggable animated pet companion and interaction panel.
- Extractable props: `pet`, `lastAnswerStatus`, `hint`.
- Hardcoded: six companion choices and action layout.

