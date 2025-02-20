// import { NavigationContext } from "@/utils/contexts/contexts";
import { redirectToPage } from "@/utils/functions/navigation_fn/redirectToPage";
// import { NavigationContextInterface } from "@/utils/interfaces/interfaces";
import { Button, Flex, Image, Input } from "@chakra-ui/react";
import { useState } from "react";
// import { useContext, useEffect } from "react";

const Login = () => {

  // const { setCurrentPage, setPreviousPage } = useContext(NavigationContext) as NavigationContextInterface

  // useEffect(()=>{
  //   setCurrentPage('login');
  //   setPreviousPage('login')
  // })

  const [ passValue, setPassValue ] = useState<number | string>()

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
          src="/public/img/brand/19.jpg"
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
            type='password'
            onChange={(e)=>{ setPassValue(e.target.value)}}
          />


          <Button
            size={"sm"}
            variant={"subtle"}
            colorPalette={"blue"}
            display={"flex"}
            alignSelf={"center"}
            onClickCapture={()=>{
              if(passValue == '0000'){
                redirectToPage('dashboard')
                localStorage.setItem('login', 'true')
              } else { window.alert('mala pass')}
            }}
          >
            ACCEDER
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default Login;
