import { Box, Flex, Text } from "@chakra-ui/react"

const Notification = ({text='text pending'}: {text:string}) => {
  return (
    <>
    <Box
      position={"fixed"}
      flexDirection={'column'}
      // height={'200px'}
      width={'94%'}
      left={'3%'}
      top={'calc(45% - 100px)'}
      colorPalette={'orange'}
      backgroundColor={'colorPalette.600'}
      borderRadius={'0.5rem'}
      justifyContent={'space-between'}
      zIndex={99}
    >
              <Flex
                padding={'2rem 1rem'}
                flexDirection={'column'}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <Text
                  fontWeight={'400'}
                  textTransform={'uppercase'}
                  color={'white'}
                  fontSize={'18px'}
                >
                  {`${text}`}
                </Text>
              </Flex>
    </Box>
    </>
  )
}

export default Notification