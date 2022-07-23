import { useGithubQuery } from "../../../../types.d";

type ContributesData = {
  totalContributions: number;
  weeks: { contributionDays: { contributionCount: number; date: string }[] }[];
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
            return { contributionCount: day.contributionCount, date: day.date };
          }),
        };
      }
    ),
  };

  return { loading: false, contributesData };
};
