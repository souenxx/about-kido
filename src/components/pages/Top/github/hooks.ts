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
    default:
      return ContributionType.MORE_TIMES;
  }
};

const countConsecutiveContribution = (
  weeks: {
    __typename?: "ContributionCalendarWeek";
    contributionDays: {
      __typename?: "ContributionCalendarDay";
      contributionCount: number;
      date: any;
    }[];
  }[]
): number => {
  let totalCount = 0;
  let countFlg = false;
  while (!countFlg) {
    [...weeks].reverse().map((week) => {
      [...week.contributionDays].reverse().map((day) => {
        if (day.contributionCount > 0 && !countFlg) {
          totalCount += 1;
        } else {
          countFlg = true;
        }
      });
    });
  }
  return totalCount;
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
      contributesData: {
        totalContributions: 0,
        weeks: [],
        consecutiveContribution: 0,
      },
    };
  }

  const { weeks, totalContributions } =
    data.user.contributionsCollection.contributionCalendar;
  const contributesData = {
    totalContributions: totalContributions,
    weeks: weeks.map((week) => {
      return {
        contributionDays: week.contributionDays.map((day) => {
          const { contributionCount, date } = day;
          return {
            contributionColor: judgeContributionType(contributionCount),
            contributionCount: contributionCount,
            date: date,
          };
        }),
      };
    }),
    consecutiveContribution: countConsecutiveContribution(weeks),
  };

  return { loading: false, contributesData };
};
