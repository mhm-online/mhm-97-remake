import React from "react";
import playerTypes from "../data/transfer-market";
import Button from "./form/Button";
import Header from "./containers/HeaderContainer";
import HeaderedPage from "./ui/HeaderedPage";

const TransferMarket = props => {
  const { player, teams, buyPlayer, sellPlayer } = props;

  const balance = player.get("balance");

  const team = teams.get(player.get("team"));

  return (
    <HeaderedPage>
      <Header back />

      <h2>Pelaajamarkkinat</h2>

      <p>Raha: {balance}</p>

      <p>Joukkueen voima: {team.get("strength")}</p>

      {playerTypes.map((playerType, index) => {
        return (
          <div key={index}>
            <Button
              onClick={() => {
                buyPlayer(player.get("id"), index);
              }}
              block
              disabled={balance < playerType.buy}
            >
              <div>{playerType.description}</div>
              <div>{playerType.buy}</div>
            </Button>
          </div>
        );
      })}
    </HeaderedPage>
  );
};

export default TransferMarket;
