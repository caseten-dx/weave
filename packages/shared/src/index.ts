export type Result<T, E> =
  | { ok: true; value: T }
  | { ok: false; error: E };

export function ok<T>(value: T): Result<T, never> {
  return { ok: true, value };
}

export function err<E>(error: E): Result<never, E> {
  return { ok: false, error };
}

export function isOk<T, E>(result: Result<T, E>): result is { ok: true; value: T } {
  return result.ok;
}

export function isErr<T, E>(result: Result<T, E>): result is { ok: false; error: E } {
  return !result.ok;
}

export interface MuseLikeError {
  code: string;
  message: string;
  cause?: unknown;
  context?: Record<string, unknown>;
}

export interface FileSystemError extends MuseLikeError {
  subsystem: "file-system";
}

export interface GitError extends MuseLikeError {
  subsystem: "git";
}

export interface ProviderError extends MuseLikeError {
  subsystem: "provider";
}

export interface ContextError extends MuseLikeError {
  subsystem: "context";
}

export interface SessionError extends MuseLikeError {
  subsystem: "session";
}

export type SessionProfile =
  | "planning"
  | "specification"
  | "architecture"
  | "implementation";

export interface ProjectFileRecord {
  path: string;
  exists: boolean;
  required: boolean;
  lastModifiedMs: number | null;
  byteSize: number;
  estimatedTokens: number;
}

export interface ProjectState {
  rootPath: string;
  discoveredAt: string;
  files: ProjectFileRecord[];
}

export interface SessionState {
  sessionId: string;
  projectRoot: string;
  startedAt: string;
  updatedAt: string;
  profile: SessionProfile;
  activeProvider: string | null;
  activeModel: string | null;
  pendingChanges: PendingFileChange[];
  closeState: SessionCloseState;
  costSummary: SessionCostSummary;
  notes: string[];
}

export interface PendingFileChange {
  path: string;
  reason: string;
  mode: "full-replacement" | "targeted-edit";
}

export interface SessionCloseState {
  status: "idle" | "running" | "failed" | "completed";
  stages: CloseStageState[];
}

export type CloseStageName =
  | "decisions"
  | "todo"
  | "sessionlog"
  | "handoff";

export interface CloseStageState {
  name: CloseStageName;
  enabled: boolean;
  status: "pending" | "completed" | "failed" | "skipped";
  lastAttemptedAt: string | null;
  errorMessage: string | null;
}

export interface ContextPart {
  source: string;
  content: string;
  estimatedTokens: number;
  priority: number;
}

export interface ContextPayload {
  profile: SessionProfile;
  parts: ContextPart[];
  estimatedTotalTokens: number;
}

export interface TokenBudget {
  modelId: string;
  maxContextTokens: number;
  reservedResponseTokens: number;
  usedInputTokens: number;
  remainingTokens: number;
  fits: boolean;
}

export interface ProviderModelInfo {
  id: string;
  displayName: string;
  contextWindowTokens: number;
  inputCostPer1kUsd?: number;
  outputCostPer1kUsd?: number;
  supportsStreaming: boolean;
}

export interface ProviderConfig {
  providerId: string;
  displayName: string;
  apiKeyEnvVar: string;
  baseUrl?: string;
}

export interface ModelMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export interface ModelRequest {
  modelId: string;
  messages: ModelMessage[];
  temperature?: number;
  maxOutputTokens?: number;
}

export interface TokenEstimate {
  inputTokens: number;
  outputReserveTokens: number;
  totalPlannedTokens: number;
}

export interface UsageRecord {
  inputTokens: number;
  outputTokens: number;
  totalTokens: number;
}

export interface StreamChunk {
  type: "content" | "usage" | "done" | "error";
  text?: string;
  usage?: UsageRecord;
  error?: string;
}

export interface ModelProvider {
  readonly providerId: string;
  validateKey(): Promise<Result<void, ProviderError>>;
  listModels(): Promise<Result<ProviderModelInfo[], ProviderError>>;
  estimateTokens(request: ModelRequest): Promise<Result<TokenEstimate, ProviderError>>;
  sendMessage(
    request: ModelRequest
  ): Promise<Result<AsyncIterable<StreamChunk>, ProviderError>>;
}

export interface ChangeOrder {
  id: string;
  title: string;
  changeType:
    | "create_file"
    | "modify_file"
    | "delete_file"
    | "update_architecture"
    | "update_test"
    | "refactor";
  targetModule: string;
  instructions: string;
  acceptanceCriteria: string[];
}

export interface ChangeReport {
  changeOrderId: string;
  modelUsed: string;
  filesProduced: string[];
  summary: string;
  concerns: string[];
  confidenceScore: number;
  tokensUsed?: number;
  durationSeconds?: number;
}

export interface HandoffBundle {
  summary: string;
  changeReport: ChangeReport | null;
  changeOrder: ChangeOrder | null;
  relevantFiles: string[];
  notes: string[];
}

export interface DeliveryArtifactFile {
  path: string;
  content: string;
  mode: "full-replacement" | "targeted-edit";
}

export interface DeliveryArtifact {
  files: DeliveryArtifactFile[];
  gitCommands: string[];
  commitMessage?: string;
}

export interface CostRecord {
  sessionId: string;
  provider: string;
  model: string;
  inputTokens: number;
  outputTokens: number;
  estimatedCostUsd: number;
  actualCostUsd?: number;
  isEstimate: boolean;
  timestamp: string;
}

export interface SessionCostSummary {
  estimatedTotalUsd: number;
  actualTotalUsd: number;
  interactionCount: number;
}

export const RECOGNIZED_ROOT_FILES = [
  "VISION.md",
  "INTENT.md",
  "PRINCIPLES.md",
  "TODO.md",
  "DECISIONS.md",
  "SESSIONLOG.md",
  "HANDOFF.md",
  "SYSTEM_PROMPT.md",
  "CORE_CONTEXT.md",
  "ROADMAP.md",
] as const;

export const RECOGNIZED_DOC_FILES = [
  "docs/ARCHITECTURE.md",
  "docs/DESIGN-CONTEXT.md",
] as const;