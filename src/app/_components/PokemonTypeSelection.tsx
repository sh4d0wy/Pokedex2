import { Button, IconButton, Paper } from "@mui/material";
import React from "react";
import { generateColor } from "./PokemonRow";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import GrassIcon from "@mui/icons-material/Grass";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import { FaFlask, FaCentercode } from "react-icons/fa6";

type PokemonTypeSelectionProps = {
  selectedType: string | undefined;
  selectType: (type: string | undefined) => void;
};

const PokemonTypeSelection = ({
  selectedType,
  selectType,
}: PokemonTypeSelectionProps) => {
  const types = ["Fire", "Water", "Grass", "Poison", "Electric", "Rock"];
  const generateIcon = (type: string) => {
    switch (type) {
      case "Fire":
        return <LocalFireDepartmentIcon />;
      case "Water":
        return <WaterDropIcon />;
      case "Grass":
        return <GrassIcon />;
      case "Electric":
        return <ElectricBoltIcon />;
      case "Poison":
        return <FaFlask />;
      case "Rock":
        return <FaCentercode />;
      default:
        return <FaCentercode />;
    }
  };

  return (
    <>
      <Paper
        sx={{
          py: 2,
          px: 3,
          width: {
            md: 500,
            sm: 400,
            xs: 300,
          },
          boxShadow: "2px 2px 10px #0000004c",
          borderRadius: 30,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          mb: 6,
        }}
      >
        {types.map((type) => {
          return (
            <IconButton
              key={type}
              sx={{
                bgcolor: generateColor(type),
                borderColor: generateColor(type),
                color: "white",
                borderRadius: 50,
                mx: {
                  md: 2,
                  xs: 1,
                },
                my: 1,
                boxShadow: `2px 5px 10px ${generateColor(type)}`,
              }}
              onClick={() => selectType(type)}
            >
              {generateIcon(type)}
            </IconButton>
          );
        })}
      </Paper>
    </>
  );
};

export default PokemonTypeSelection;
