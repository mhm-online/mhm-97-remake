import React from "react";
import Button from "../form/Button";
import pranks from "../../data/pranks";
import { currency as c } from "../../services/format";

const SelectType = props => {
  const { manager, selectType, competition, enabled } = props;
  return (
    <div>
      {pranks
        .map((prank, i) => {
          const price = prank.get("price")(competition);

          return (
            <Button
              disabled={!enabled || price > manager.get("balance")}
              block
              key={i}
              onClick={() => {
                selectType(i);
              }}
            >
              <div>{prank.get("name")}</div>
              <div>
                <small>{c(price)}</small>
              </div>
            </Button>
          );
        })
        .toList()}
    </div>
  );
};

export default SelectType;
