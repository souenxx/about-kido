import { FC } from "react";
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
import { Tooltip, CircularProgress } from "@mui/material";

type Props = {
  loading: boolean;
  contributesData: ContributesData;
};

export const GithubPresenter: FC<Props> = ({ loading, contributesData }) => {
  const { totalContributions, weeks, consecutiveContribution } =
    contributesData;
  return (
    <StyledWrapperDiv id="contribute-div">
      <StyledTitle>contributions</StyledTitle>
      <StyledContainerDiv>
        <StyledImgDiv>
          <StyledImg src="./g0721.png" />
        </StyledImgDiv>

        <StyledContributionNumberDiv>
          {loading ? (
            <CircularProgress color="success" />
          ) : (
            <>
              <StyledTotalContributionsDiv>
                <StyledTotalContributionsP>
                  {totalContributions} contributions in the last year
                </StyledTotalContributionsP>
              </StyledTotalContributionsDiv>
              <StyledConsecutiveDaysDiv>
                <StyledConsecutiveDaysP>
                  {consecutiveContribution} consecutive days of contribution
                </StyledConsecutiveDaysP>
              </StyledConsecutiveDaysDiv>
            </>
          )}
        </StyledContributionNumberDiv>
      </StyledContainerDiv>
      {loading ? (
        <CircularProgress color="success" />
      ) : (
        <StyledScrollDiv>
          <StyledContributionsDiv>
            {weeks.map((week, i) => {
              return (
                <StyledWeekDiv rowIndex={i}>
                  {week.contributionDays.map((day) => {
                    const tipComment = `${day.contributionCount} contributions on ${day.date}`;
                    return (
                      <Tooltip title={tipComment} arrow>
                        <StyledDayDiv
                          contributionColor={day.contributionColor}
                        />
                      </Tooltip>
                    );
                  })}
                </StyledWeekDiv>
              );
            })}
          </StyledContributionsDiv>
        </StyledScrollDiv>
      )}
    </StyledWrapperDiv>
  );
};
