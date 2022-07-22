import React from "react";
import { useSelector } from "react-redux";
import {
  SkillRatingsRow,
  skillRatingsSelector,
} from "../../redux/skillRatingsSlice";
import SkillRowEmoji from "./SkillRowEmoji";

export type SkillRowType = {
  skillId: String;
  sectionName: String;
  skillName: String;
  skillRating: Number;
};

export type SkillRowProps = {
  skillRow: SkillRatingsRow;
};

export default function SkillRow({ skillRow }: SkillRowProps) {
  const { skillRatings } = useSelector(skillRatingsSelector);
  const index = skillRatings.findIndex(
    (obj) => obj.skillId == skillRow.skillId
  );

  const renderEmojiByRating = (skillRating: Number) => {
    if (skillRating == 0) {
      return "😶";
    } else if (skillRating < 30) {
      return "😐";
    } else if (skillRating < 60) {
      return "🙂";
    } else if (skillRating < 90) {
      return "😊";
    } else {
      return "🤩";
    }
  };

  return (
    <div className="grid grid-cols-8 justify-center items-center text-center">
      <div className="w-1/2 h-1/2 bg-murkrow/50 rounded-full flex p-12 shadow-xl justify-center items-center text-center text-6xl">
        {renderEmojiByRating(skillRatings[index].studentRating)}
      </div>
      <p className="col-start-2 col-span-3 text-xl">{skillRow.skillName}</p>
      <p className="text-xl">{skillRow.studentRating}</p>
      <SkillRowEmoji skillId={skillRow.skillId} />
    </div>
  );
}
