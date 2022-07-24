export const ContributionType = {
  NONE: "#f5f5f5",
  ONCE: "#90ee90",
  TWICE: "#3cb371",
  THREE_TIMES: "#008000",
  MORE_TIMES: "#006400",
} as const;

export type ContributesData = {
  totalContributions: number;
  weeks: {
    contributionDays: {
      contributionColor: string;
      contributionCount: number;
      date: string;
    }[];
  }[];
};
