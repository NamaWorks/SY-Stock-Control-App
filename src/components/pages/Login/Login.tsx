// import { NavigationContext } from "@/utils/contexts/contexts";
import { redirectToPage } from "@/utils/functions/navigation_fn/redirectToPage";
// import { NavigationContextInterface } from "@/utils/interfaces/interfaces";
import { Button, Flex, Image, Input } from "@chakra-ui/react";
// import { useContext, useEffect } from "react";

const Login = () => {

  // const { setCurrentPage, setPreviousPage } = useContext(NavigationContext) as NavigationContextInterface

  // useEffect(()=>{
  //   setCurrentPage('login');
  //   setPreviousPage('login')
  // })

  return (
    <>
      <Flex
        flexDirection={"column"}
        gap={"1.5rem"}
        justifyContent={'space-between'}
        height={'40svh'}
      >
        <Image
          rounded="xl"
          borderRadius={"full"}
          src="https://bit.ly/dan-abramov"
          alt="SY logo"
          height={"75px"}
          width={"75px"}
          alignSelf={"center"}
        />

        <Flex
         flexDirection={'column'}
         gap={'1.5rem'}
        >
          <Input
            placeholder="código"
            variant={"subtle"}
            size={"sm"}
            width={"75svw"}
          />

          <Button
            size={"sm"}
            variant={"subtle"}
            colorPalette={"blue"}
            onClick={() => {
              console.log("clicked");
            }}
            display={"flex"}
            alignSelf={"center"}
            onClickCapture={()=>{redirectToPage('dashboard')}}
          >
            ACCEDER
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default Login;
