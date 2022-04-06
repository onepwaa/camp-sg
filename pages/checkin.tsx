import React from "react";
import prisma from "../lib/prisma";
import useSWR, { mutate } from "swr";
import { GetServerSideProps } from "next";
import { Team } from "@prisma/client";

type Props = {
  teams: any;
};

async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

const CheckIn = ({ teams }: Props) => {
  const { data } = useSWR<Team[]>("/api/teams", fetcher, {
    fallbackData: teams,
  });
  async function checkInTeam(id: String, present: boolean) {
    await fetch(`/api/checkin?team=${id}&in=${!present}`).then((res) => res.json());
    mutate("/api/teams");
  }
  return (
    <div>
      <h2>Check-Ins</h2>
      {data.sort((a, b) => a.id < b.id ? -1 : 1).map((team) => (
        <div>
          <span style={{ marginRight: "8px" }}>{team.Name}</span>
          <button onClick={() => checkInTeam(team.id, team.Present)}>
            {team.Present == true ? "Reverse Check-in" : "Check-in"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default CheckIn;

export const getServerSideProps: GetServerSideProps = async (context) => {
  let teams = await prisma.team.findMany();
  return { props: { teams } };
};
