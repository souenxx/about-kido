import { FC } from "react";
import { CircularProgress } from "@mui/material";
import {
  StyledContributionsDiv,
  StyledWrapperDiv,
  StyledDayDiv,
  StyledTitle,
  StyledWeekDiv,
} from "./style";

type ContributesData = {
  totalContributions: number;
  weeks: { contributionDays: { contributionCount: number; date: string }[] }[];
};

type Props = {
  loading: boolean;
  contributesData: ContributesData;
};

export const GithubPresenter: FC<Props> = ({ loading, contributesData }) => {
  console.log(contributesData);
  if (loading) {
    <div>
      <CircularProgress />
    </div>;
  }

  return (
    <StyledWrapperDiv>
      <StyledTitle>contributions</StyledTitle>
      <StyledContributionsDiv>
        {contributesData.weeks.map((week, i) => {
          return (
            <StyledWeekDiv rowIndex={i}>
              {week.contributionDays.map((day) => {
                return <StyledDayDiv />;
              })}
            </StyledWeekDiv>
          );
        })}
      </StyledContributionsDiv>
    </StyledWrapperDiv>
  );
};
