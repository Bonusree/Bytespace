# ByteSpace

Landing page for ByteSpace, an online learning platform, built from the "ByteSpace New Check website" Figma design.

**Live site:** _add your Vercel URL here_

## Tech stack

- HTML5
- CSS3 (custom properties, Flexbox, Grid, media queries); no framework
- Vanilla JavaScript for a few small interactions
- Fonts: Poppins and Archivo (Google Fonts), Satoshi (Fontshare)

No build step and no dependencies.

## Page sections

1. **Header:** logo, navigation (Home, Courses, Creators), Sign In / Join Us, cart icon, mobile menu
2. **Hero:** heading, search bar, student photo with floating cards (UI/UX Design, Learning Progress, Happy Students), 3D shapes on a blue grid
3. **Logo strip:** partner logos
4. **Courses:** category chips and six course cards
5. **Learning paths:** six category cards
6. **Professional growth:** text, stats (12K students, 70+ courses, 16 creators) and a course/progress visual
7. **Create & manage:** revenue cards, happy students card and feature checklist
8. **Creator CTA:** "Join as Creator" banner
9. **Testimonials:** three reviews
10. **Footer:** newsletter form, link columns, legal links

## Project structure

```
├── index.html          # Page markup
├── css/
│   └── style.css       # Design tokens, reusable components, sections, responsive rules
├── js/
│   └── main.js         # Mobile menu, category chips, newsletter form
└── images/
    ├── avatars/        # Student and testimonial photos
    ├── courses/        # Course card images
    ├── icons/          # Learning path icons
    ├── logos/          # Partner logos
    ├── shapes/         # 3D decorative shapes (lime and white)
    ├── hero-boy.png
    └── creator-girl.png
```

## Code organisation

- **Design tokens:** colors, fonts and radii are CSS custom properties at the top of `style.css` (for example `--brand`, `--lime`, `--ink`), so the theme changes in one place.
- **Reusable components:** classes such as `.btn`, `.heading`, `.course-card`, `.info-card`, `.avatars`, `.checklist` and `.shape` are shared across sections. The same course card and info cards appear in several places.
- **Reusable icons:** SVG icons are defined once as `<symbol>` elements and reused with `<use>`.
- **Responsive:** the layout follows the 1440px Figma frame on desktop and stacks into one column on tablets and phones.
- **Accessibility:** semantic sections, labelled form fields, `aria` attributes on the menu toggle and chips, and decorative images marked `alt=""`.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

## Deployment

Deployed on Vercel as a static site (Framework Preset: **Other**, no build command).

## Notes for the reviewer

- The page is front-end only. Forms and buttons are not connected to a backend.
- Photos and 3D shapes come from the Figma file. The lime and white shape colors were produced by recoloring the original grey and black shape images.
- The partner logos, learning-path icons and two testimonial photos were cut from the Figma page export, because they were not available as separate files.
