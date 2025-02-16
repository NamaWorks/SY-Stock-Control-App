import { NavigationContext } from "@/utils/contexts/contexts";
import { redirectToPage } from "@/utils/functions/navigation_fn/redirectToPage";
import { NavigationContextInterface } from "@/utils/interfaces/interfaces";
import { Button, Flex, Icon } from "@chakra-ui/react";
import { useContext, useEffect } from "react";

const Navbar = () => {

  const { previousPage } = useContext(NavigationContext) as NavigationContextInterface

  return (
    <>
      <Flex
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        width={"95svw"}
        position={"fixed"}
        top={"2.5svw"}
        left={"2.5svw"}
      >
        <Flex
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"flex-start"}
          height={"100%"}
          width={"100%"}
          gap={"1rem"}
        >
          <Button
              colorPalette={"orange"}
              variant={"solid"}
              borderRadius={"full"}
              height={"50px"}
              width={"50px"}
              onClickCapture={()=>{redirectToPage(previousPage)}}
            >
              <Icon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-move-left"
                >
                  <path d="M6 8L2 12L6 16" />
                  <path d="M2 12H22" />
                </svg>
              </Icon>
            </Button>

          <Button
            borderRadius={"full"}
            colorPalette={"blue"}
            variant={"subtle"}
          >
            Stats
          </Button>
        </Flex>

        <Button
          borderRadius={"full"}
          alignSelf={"center"}
          colorPalette={"blue"}
          variant={"subtle"}
        >
          Carrito
        </Button>
      </Flex>
    </>
  );
};

export default Navbar;
