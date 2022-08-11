import { FC } from "react";
import { CircularProgress } from "@mui/material";
import {
  StyledContributionsDiv,
  StyledWrapperDiv,
  StyledDayDiv,
  StyledTitle,
  StyledWeekDiv,
  StyledScrollDiv,
  StyledImg,
  StyledTotalContributionsDiv,
  StyledTotalContributionsP,
  StyledConsecutiveDaysDiv,
  StyledConsecutiveDaysP,
  StyledContainerDiv,
  StyledImgDiv,
  StyledContributionNumberDiv,
} from "./style";
import { ContributesData } from "./types";
import { Tooltip } from "@mui/material";

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
    <StyledWrapperDiv id="contribute-div">
      <StyledTitle>contributions</StyledTitle>
      <StyledContainerDiv>
        <StyledImgDiv>
          <StyledImg src="./g0721.png" />
        </StyledImgDiv>
        <StyledContributionNumberDiv>
          <StyledTotalContributionsDiv>
            <StyledTotalContributionsP>
              {contributesData.totalContributions} contributions in the last
              year
            </StyledTotalContributionsP>
          </StyledTotalContributionsDiv>
          <StyledConsecutiveDaysDiv>
            <StyledConsecutiveDaysP>
              10 consecutive days of contribution
            </StyledConsecutiveDaysP>
          </StyledConsecutiveDaysDiv>
        </StyledContributionNumberDiv>
      </StyledContainerDiv>
      <StyledScrollDiv>
        <StyledContributionsDiv>
          {contributesData.weeks.map((week, i) => {
            return (
              <StyledWeekDiv rowIndex={i}>
                {week.contributionDays.map((day) => {
                  const tipComment = `${day.contributionCount} contributions on ${day.date}`;
                  return (
                    <Tooltip title={tipComment} arrow>
                      <StyledDayDiv contributionColor={day.contributionColor} />
                    </Tooltip>
                  );
                })}
              </StyledWeekDiv>
            );
          })}
        </StyledContributionsDiv>
      </StyledScrollDiv>
    </StyledWrapperDiv>
  );
};
