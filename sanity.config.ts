"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemas";
import { apiVersion, dataset, projectId } from "./sanity/env";

// Embedded Studio served at /studio (see app/studio/[[...tool]]/page.tsx).
export default defineConfig({
  name: "mlk-hair",
  title: "MLK Hair",
  basePath: "/studio",
  projectId: projectId || "placeholder",
  dataset,
  plugins: [structureTool()],
  schema: { types: schemaTypes },
  apiVersion,
});
