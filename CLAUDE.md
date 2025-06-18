# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `pnpm dev` (or `npm run dev`) - Starts React Router dev server
- **Build**: `pnpm build` (or `npm run build`) - Builds the application for production
- **Type checking**: `pnpm typecheck` (or `npm run typecheck`) - Runs React Router type generation and TypeScript checking
- **Production server**: `pnpm start` (or `npm run start`) - Serves the built application

## Architecture Overview

This is a **React Router v7** SSR application serving as the landing page for Flags.gg. The app uses:

- **React Router v7** with SSR enabled for routing and server-side rendering
- **Tailwind CSS v4** with TailwindCSS Vite plugin for styling
- **Jotai** for state management (currently managing theme state)
- **@flags-gg/react-library** for feature flag integration
- **Radix UI** components for accessible UI primitives
- **shadcn/ui** component system with "new-york" style

### Project Structure

- `app/routes/` - Route definitions (currently only `home.tsx`)
- `app/components/` - Organized by feature areas:
  - `hero/`, `features/`, `pricing/`, etc. - Landing page sections
  - `ui/` - shadcn/ui components (Button, Card, etc.)
  - `header/`, `footer/` - Layout components
- `app/lib/` - Utilities and state management
- `app/appconfig.tsx` - Configuration for Flags.gg integration and site URLs

### Key Architecture Details

- **Route configuration**: Defined in `app/routes.ts` using React Router's new routing system
- **Theme system**: Uses Jotai atom with localStorage persistence (`themeAtom` in `app/lib/state.ts`)
- **Feature flags**: Integrated via `@flags-gg/react-library` with FlagsProvider wrapping the main app
- **Component imports**: Uses `~/*` alias for `./app/*` imports (configured in tsconfig.json)
- **Environment variables**: Site URLs configurable via VITE_* environment variables

### Component Architecture

Components follow a feature-based organization where each landing page section has its own directory. The UI components use Radix UI primitives with Tailwind styling and follow the shadcn/ui patterns.

The main layout is defined in `app/root.tsx` with theme-aware HTML class application and includes font loading for Inter font family.