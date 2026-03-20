export type Result<T, E> =
  | { ok: true; value: T }
  | { ok: false; error: E };

export function ok<T>(value: T): Result<T, never> {
  return { ok: true, value };
}

export function err<E>(error: E): Result<never, E> {
  return { ok: false, error };
}

export interface ProjectState {
  rootPath: string;
  files: Array<{
    path: string;
    exists: boolean;
    lastModifiedMs: number | null;
    estimatedTokens: number;
  }>;
}

export interface SessionState {
  sessionId: string;
  projectRoot: string;
  startedAt: string;
  activeModel: string | null;
  pendingChanges: string[];
}

export interface ContextPayload {
  profile: "planning" | "specification" | "architecture" | "implementation";
  parts: Array<{
    source: string;
    content: string;
    estimatedTokens: number;
  }>;
  estimatedTotalTokens: number;
}

export interface TokenBudget {
  modelId: string;
  maxContextTokens: number;
  reservedResponseTokens: number;
  usedTokens: number;
  remainingTokens: number;
}

export interface ChangeOrder {
  id: string;
  title: string;
  instructions: string;
  acceptanceCriteria: string[];
}

export interface ChangeReport {
  changeOrderId: string;
  summary: string;
  filesProduced: string[];
  concerns: string[];
  confidenceScore: number;
}

export interface HandoffBundle {
  summary: string;
  changeReport: ChangeReport | null;
  changeOrder: ChangeOrder | null;
  relevantFiles: string[];
}

export interface DeliveryArtifact {
  files: Array<{
    path: string;
    content: string;
    mode: "full-replacement" | "targeted-edit";
  }>;
  gitCommands: string[];
}

export interface CostRecord {
  provider: string;
  model: string;
  inputTokens: number;
  outputTokens: number;
  estimatedCostUsd: number;
  timestamp: string;
}