import type { SessionProfile } from "@weave/shared";

export interface SessionProfileDefinition {
  profile: SessionProfile;
  description: string;
  preferredFiles: string[];
}

export const SESSION_PROFILE_DEFINITIONS: SessionProfileDefinition[] = [
  {
    profile: "planning",
    description: "Review status, prioritize tasks, and decide next work.",
    preferredFiles: [
      "CORE_CONTEXT.md",
      "TODO.md",
      "ROADMAP.md",
      "SESSIONLOG.md",
    ],
  },
  {
    profile: "specification",
    description: "Draft or revise a specification document.",
    preferredFiles: [
      "CORE_CONTEXT.md",
      "DECISIONS.md",
      "docs/DESIGN-CONTEXT.md",
    ],
  },
  {
    profile: "architecture",
    description: "Make or refine system architecture decisions.",
    preferredFiles: [
      "CORE_CONTEXT.md",
      "DECISIONS.md",
      "docs/DESIGN-CONTEXT.md",
      "docs/ARCHITECTURE.md",
    ],
  },
  {
    profile: "implementation",
    description: "Implement bounded code or workflow changes.",
    preferredFiles: [
      "CORE_CONTEXT.md",
      "TODO.md",
      "docs/ARCHITECTURE.md",
    ],
  },
];

export function getSessionProfileDefinition(
  profile: SessionProfile
): SessionProfileDefinition | undefined {
  return SESSION_PROFILE_DEFINITIONS.find((item) => item.profile === profile);
}