# Pixtopia — GDG Event Platform (Demo Version)

A Pixar-themed web application originally built for a GDG on Campus RCOEM event. This repository contains a standalone demo version of the platform, optimized for portfolio showcase without requiring backend services.

**[Original Repository for Code Review](https://github.com/RCOEM-Google-DSC/Pixtopia)** 
*(The original repo contains the full Supabase integration, admin dashboard, and multi-round realtime architecture.)*

## Overview

Pixtopia is an interactive, gamified platform featuring:
- **Immersive 3D Login**: A cinematic login experience using React Three Fiber with 3D models (Lightning McQueen drifting, EVE floating), custom camera rigs, and particle effects.
- **Dynamic Dashboard**: A visually striking dashboard with interactive SVG masks and Framer Motion animations.
- **Round 1 (Playable)**: A fully functional Pixar-themed logic & math quiz with a countdown timer and instant feedback.
- **Standalone Mode**: Supabase auth and database dependencies have been removed/mocked, allowing the application to run entirely client-side for demonstration purposes.

## Tech Stack

- **Framework**: Next.js (React)
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Animations**: Framer Motion
- **Original Backend (mocked in this repo)**: Supabase (Auth, Postgres, Realtime)

## Running Locally

1. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

*Note: Since this is a demo version, you can bypass the login screen by simply clicking "Enter Pixtopia".*
