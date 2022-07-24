import { useGithubQuery } from "../../../../types.d";
import { ContributionType, ContributesData } from "./types";

const judgeContributionType = (contributionCount: number) => {
  switch (contributionCount) {
    case 0:
      return ContributionType.NONE;
    case 1:
      return ContributionType.ONCE;
    case 2:
      return ContributionType.TWICE;
    case 3:
      return ContributionType.THREE_TIMES;
    case 4:
      return ContributionType.MORE_TIMES;
    default:
      return ContributionType.NONE;
  }
};

export const useGithub = (): {
  loading: boolean;
  contributesData: ContributesData;
} => {
  const { loading, data } = useGithubQuery({
    variables: { userName: "souenxx" },
  });
  if (loading || !data || !data.user) {
    return {
      loading: true,
      contributesData: { totalContributions: 0, weeks: [] },
    };
  }

  const contributesData = {
    totalContributions:
      data.user.contributionsCollection.contributionCalendar.totalContributions,
    weeks: data.user.contributionsCollection.contributionCalendar.weeks.map(
      (week) => {
        return {
          contributionDays: week.contributionDays.map((day) => {
            return {
              contributionColor: judgeContributionType(day.contributionCount),
              contributionCount: day.contributionCount,
              date: day.date,
            };
          }),
        };
      }
    ),
  };

  return { loading: false, contributesData };
};
