/* eslint-disable react/prop-types */
import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { Box, Card, Menu, Stack, Button, MenuItem, CardMedia, Typography, IconButton } from "@mui/material"

import Iconify from "src/components/iconify"

import SubscriptionDialog from "./subscriptionDialog"

const recipes = [
  {
    id: 1,
    title: "Greek salad",
    style: "Comfort Meal",
    category: "Breakfast",
    proteins: "Beef and Pork",
    dietary: "Gluten-free",
    preparation: "Oven",
    image: "/assets/images/dish1.svg",
    favorite: true,
    level: "Medium",
  },
]

const levels = ["Easy", "Medium", "Hard", "Expert"]
const colors = ["#F79256", "#E0E0E0"] // Active (orange) and inactive (grey) colors

const TooltipCard = ({ setOpenDeleteMealDialog, onClose }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [sortOrder, setSortOrder] = useState("Portion")
  const [recipeList, setRecipeList] = useState(recipes)
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  const handleCloseMenu = () => setAnchorEl(null)

  const handleSelectSortOrder = (order) => {
    setSortOrder(order)
    setAnchorEl(null)
  }

  const handleClickMenu = (event) => setAnchorEl(event.currentTarget)

  const handleToggleFavorite = (id) => {
    setRecipeList(recipeList.map((recipe) => (recipe.id === id ? { ...recipe, favorite: !recipe.favorite } : recipe)))
  }

  // const handleDelete = () => {
  //   setOpenDeleteMealDialog(true)
  //   onClose() // Close the tooltip
  // }

  return (
    <Box>
      {recipeList.map((recipe) => {
        const activeIndex = levels.indexOf(recipe.level) + 1

        return (
          <Card key={recipe.id} sx={{ maxWidth: 400, position: "relative", mb: 4 }}>
            <CardMedia component="img" image={recipe.image} alt={recipe.style} />
            <Box sx={{ position: "absolute", top: 10, left: 10, color: "white" }}>
              <Stack spacing={2}>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <Button
                    onClick={() => setOpen(true)}
                    variant="contained"
                    size="small"
                    sx={{
                      fontSize: "10px",
                      display: "flex",
                      gap: 1,
                      alignItems: "center",
                      fontWeight: 400,
                    }}
                  >
                    Modify
                    <Iconify sx={{ color: "#fff", width: "12px", height: "12px" }} icon="basil:edit-solid" />
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      fontSize: "10px",
                      display: "flex",
                      gap: 1,
                      alignItems: "center",
                      fontWeight: 400,
                    }}
                    onClick={() => setOpen(true)}

                    // onClick={handleDelete}
                  >
                    Delete
                    <Iconify sx={{ color: "#fff", width: "12px", height: "12px" }} icon="fluent:delete-28-filled" />
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ fontSize: "10px", textTransform: "none", borderRadius: "10px" }}
                    onClick={handleClickMenu}
                    endIcon={<Iconify sx={{ color: "#fff" }} icon="ep:arrow-down" />}
                  >
                    {sortOrder} {/* Button now reflects the selected portion */}
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleCloseMenu}
                    PaperProps={{ style: { maxHeight: 48 * 4.5, width: "10ch" } }}
                    sx={{
                      ml: "-50px",
                      mt: 0.7,
                      zIndex: "9999 !important",
                      "& .MuiMenuItem-root": {
                        "&:hover": {
                          backgroundColor: "#F79256",
                          color: "#fff",
                        },
                      },
                      "&::-webkit-scrollbar": {
                        width: "3px",
                      },
                      "&::-webkit-scrollbar-track": {
                        backgroundColor: "#F79256",
                      },
                      "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "#F79256",
                        borderRadius: "10px",
                      },
                      "&::-webkit-scrollbar-thumb:hover": {
                        backgroundColor: "#ff9f76",
                      },
                      scrollbarWidth: "thin",
                    }}
                  >
                    {[...Array(10).keys()].map((index) => (
                      <MenuItem
                        key={index}
                        onClick={(e) => {
                          handleSelectSortOrder(`Portion: ${index + 1}`)
                        }}
                      >
                        Portion: {index + 1}
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                    <IconButton
                      aria-label="add to favorites"
                      onClick={(event) => {
                        event.stopPropagation()
                        handleToggleFavorite(recipe.id)
                      }}
                    >
                      {recipe.favorite ? (
                        <Iconify sx={{ color: "white", height: 20, width: 20 }} icon="twemoji:red-heart" />
                      ) : (
                        <Iconify sx={{ color: "white", height: 20, width: 20 }} icon="mdi:heart-outline" />
                      )}
                    </IconButton>
                    <Box
                      sx={{
                        backgroundColor: "#F79256",
                        "&:hover": {
                          backgroundColor: "#e27602",
                        },
                        height: "20px",
                        p: "12px 10px",
                        cursor: "pointer",
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Iconify
                        onClick={() => setOpen(true)}
                        sx={{
                          width: "15px",
                          height: "15px",
                          color: "#000",
                          transition: "color 0.3s ease", // Smooth color transition
                          "&:hover": {
                            color: "#FFF !important", // Color on hover
                          },
                        }}
                        icon="ion:shuffle"
                      />
                    </Box>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "12px !important",
                        fontWeight: "400",
                        display: "flex",
                        gap: 1,
                        alignItems: "center",
                      }}
                    >
                      {" "}
                      See the recipe in detail
                      <Box
                        sx={{
                          border: "1px solid #CFCECE",
                          background: "white",
                          borderRadius: "50px",
                          p: "4px",
                          display: "flex",
                          alignItems: "center",
                          cursor: "pointer",
                        }}
                      >
                        <Iconify
                          onClick={() => navigate("/detail")}
                          sx={{ color: "#000", width: "15px", height: "15px" }}
                          icon="basil:arrow-right-outline"
                        />
                      </Box>
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "end" }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      gap: "6px",
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        color: "#000",
                        padding: "2px 8px",
                        fontSize: "11px !important",
                        borderRadius: "5px",
                        fontWeight: "500",
                        minWidth: "50px",
                      }}
                    >
                      20 Likes
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        color: "#000",
                        padding: "2px 8px",
                        fontSize: "11px !important",
                        borderRadius: "5px",
                        fontWeight: "500",
                        minWidth: "50px",
                      }}
                    >
                      20 Downloads
                    </Button>
                  </Box>
                </Box>
              </Stack>
            </Box>
            <Box
              sx={{
                padding: 2,
                background: "linear-gradient(180deg, rgba(0, 0, 0, 0.50) 0%, #070707 100%)",
                position: "absolute",
                bottom: 0,
                width: "100%",
                color: "white",
              }}
            >
              <Box sx={{ mb: 1 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 1,
                    justifyContent: "space-between",
                  }}
                >
                  <Stack gap="3px">
                    <Typography sx={{ fontSize: "16px !important", fontWeight: "700" }}>{recipe.title}</Typography>
                    <Typography sx={{ fontSize: "12px !important", fontWeight: "500", mt: 1 }}>
                      Style: {recipe.style}
                    </Typography>
                    <Typography sx={{ fontSize: "12px !important", fontWeight: "500" }}>
                      Category: {recipe.category}
                    </Typography>
                    <Typography sx={{ fontSize: "12px !important", fontWeight: "500" }}>
                      Proteins: {recipe.proteins}
                    </Typography>
                    <Typography sx={{ fontSize: "12px !important", fontWeight: "500" }}>
                      Preparation: {recipe.preparation}
                    </Typography>
                  </Stack>
                  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Box display="flex">
                      <Iconify style={{ color: "white" }} icon="il:clock" />
                      <Typography
                        sx={{
                          color: "white",
                          fontSize: "12px !important",
                          pl: "3px",
                          fontWeight: "500 !important",
                          alignItems: "center",
                        }}
                      >
                        10 min
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "12px !important",
                        fontWeight: "500 !important",
                        textAlign: "right",
                      }}
                    >
                      Servings: 4
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "end" }}>
                <Typography variant="body2">{recipe.level}</Typography>
                <Box sx={{ display: "flex", ml: 1, gap: 0.5 }}>
                  {levels.map((_, index) => (
                    <Box
                      key={index}
                      sx={{
                        width: 12,
                        height: 12,
                        backgroundColor: index < activeIndex ? colors[0] : colors[1],
                        borderRadius: "50%",
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Box>
          </Card>
        )
      })}
      <SubscriptionDialog open={open} onClose={() => setOpen(false)} />
    </Box>
  )
}

export default TooltipCard

