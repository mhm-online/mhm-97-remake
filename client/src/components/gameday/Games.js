import React from "react";
import styled from "styled-components";
import TeamName from "../team/Name";
import { List } from "immutable";

const Games = props => {
  const { className, teams, context, round, players } = props;

  const pairings = context.getIn(["schedule", round], List());

  return (
    <div className={className}>
      <table>
        <tbody>
          {pairings.map((pairing, i) => {
            return (
              <tr key={i}>
                <td>
                  <TeamName
                    players={players}
                    team={teams.get(
                      context.getIn(["teams", pairing.get("home")])
                    )}
                  />
                </td>
                <td>-</td>
                <td>
                  <TeamName
                    players={players}
                    team={teams.get(
                      context.getIn(["teams", pairing.get("away")])
                    )}
                  />
                </td>
                {pairing.get("result") && (
                  <>
                    <td>{pairing.getIn(["result", "home"])}</td>
                    <td>-</td>
                    <td>{pairing.getIn(["result", "away"])}</td>
                  </>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default styled(Games)`
  max-width: 30em;
`;