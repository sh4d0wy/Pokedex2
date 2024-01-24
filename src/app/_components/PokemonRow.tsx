"use client";
import React from "react";
import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Button,
  Paper,
  Stack,
  Box,
} from "@mui/material";
import { indigo } from "@mui/material/colors";
import Image from "next/image";


type Pokemon = {
  id: number;
  name: string;
  types: string[];
  sprite:string
}
export const generateColor = (color: string) => {
  switch (color.toLowerCase()) {
    case "fire":
      return "#F2BD7E";
    case "grass":
      return "#A9F186";
    case "water":
      return "#95B6FE";
    case "electric":
      return "#FFDC50";
    default:
      return indigo[300];
  }
};
export const PokemonRow = (props:Pokemon) => {
  const types = ["Fire", "Water"];
  return (
      <Paper
        sx={{
          width: {
            md: "15vw",
            sm: "25vw",
          },
          height: {
            md: "12vw",
            sm: "25vw",
          },
          borderRadius: 5,
          my:2,
          boxShadow:"2px 2px 10px #0000001c"
        }}
      >
        <Stack direction="column" alignItems="center">
          <Box
            component="img"
            src={props.sprite}
            alt={props.name}
            sx={{
              width: {
                md: 60,
              },
              height: {
                md: 60,
              },
              position: "relative",
              bottom: 40,
            }}
          />
          <Typography variant="body2" color={indigo[200]} sx={{

          }}>
            #{props.id}
          </Typography>
          <Typography
            variant="h6"
            pb={2}
            sx={{
             
              fontWeight: "900",
              color: indigo[900],
            }}
          >
            {props.name}
          </Typography>
            <Stack direction={{
              md:"row",
              sm:"column"
            }} spacing={{md:2,sm:1}} flexWrap="wrap" alignItems="center">
          {props.types.map((type) => {
            const color = generateColor(type)
            return (
              <>
                <Typography
                  variant="body2"
                  sx={{
                    backgroundColor:color,
                    borderRadius: 10,
                    px: 2,
                    py: 0.5,
                    fontWeight: "650",
                    fontSize: {
                      md:"1rem",
                      sm:"0.8rem",
                      xs:"0.5rem"
                    },
                  }}
                >
                  {type}
                </Typography>
              </>
            );
          })}
          </Stack>
        </Stack>
      </Paper>
    
  );
};


