import React from "react";
import Header from "./containers/HeaderContainer";
import HeaderedPage from "./ui/HeaderedPage";
import ManagerInfo from "./manager/ManagerInfo";
import ButtonRow from "./form/ButtonRow";
import Button from "./form/Button";
import arenas from "../data/arenas";
import styled, { css } from "styled-components";
import { currency } from "../services/format";

const ArenaHierarchy = styled.div``;

const Arena = styled.div`
  ${props =>
    props.current &&
    css`
      font-weight: bold;
    `}
`;

const LeagueTables = props => {
  const { manager, teams, improveArena } = props;

  const currentLevel = manager.getIn(["arena", "level"]);

  const nextLevel = arenas.get(currentLevel + 1);

  const canDo =
    manager.get("balance") >= nextLevel.get("price") && currentLevel < 9;

  return (
    <HeaderedPage>
      <Header back>
        <h2>Areena</h2>
      </Header>

      <ManagerInfo manager={manager} teams={teams} />

      <ArenaHierarchy>
        <h2>Areenasi sijoitus areenahierarkiassa:</h2>

        {arenas
          .map((arena, level) => {
            return (
              <Arena current={level === currentLevel} key={arena.get("id")}>
                {arena.get("name")}
              </Arena>
            );
          })
          .reverse()}
      </ArenaHierarchy>

      <ButtonRow>
        <Button
          block
          disabled={!canDo}
          onClick={() => {
            improveArena(manager.get("id"));
          }}
        >
          <div>Paranna halliolosuhteitasi</div>
          <div>{currency(nextLevel.get("price"))}</div>
        </Button>
      </ButtonRow>
    </HeaderedPage>
  );
};

export default LeagueTables;