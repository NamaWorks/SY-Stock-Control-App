import { 
  // NavigationContext, 
  ProductsContext } from "@/utils/contexts/contexts";
import { getDataFromAt } from "@/utils/functions/api_fn/getDataFromAt";
import { getDataOffset } from "@/utils/functions/api_fn/getDataOffset";
// import { redirectToPage } from "@/utils/functions/navigation_fn/redirectToPage";
import { 
  // NavigationContextInterface, 
  ProductsContextInterface } from "@/utils/interfaces/interfaces";
import { Button, Flex, Icon} from "@chakra-ui/react";
import { useContext, 
  // useEffect
} from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // const { fetchingData, setFetchingData } = useContext(NavigationContext) as NavigationContextInterface;
  const { products,setProducts } = useContext(ProductsContext) as ProductsContextInterface;

  // useEffect(()=>{
    // setFetchingData(false)
  // },[products, setFetchingData])

  return (
    <>
      {/* {fetchingData &&
      <Alert.Root
        borderStartWidth="3px"
        borderStartColor="colorPalette.600"
        title="fetching"
        position={'fixed'}
        top={'45%'}
        left={'0'}
        zIndex={99}

      >
        <Alert.Indicator>
          <Spinner size="sm" />
        </Alert.Indicator>
        <Alert.Title>Cargando...</Alert.Title>
      </Alert.Root>
      } */}

      <Flex
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        width={"95svw"}
        position={"fixed"}
        top={"15px"}
        left={"10px"}
        zIndex={"99"}
      >
        <Flex
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"flex-start"}
          height={"100%"}
          width={"100%"}
          gap={"1rem"}
        >
          <Link to={"/dashboard"}>
            <Button
              colorPalette={"orange"}
              variant={"solid"}
              borderRadius={"full"}
              height={"50px"}
              width={"50px"}
              onClick=
              {async () => {
                setProducts(
                  await getDataFromAt(import.meta.env.VITE_PRODUCTS_TABLE)
                );
              }}
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
          </Link>

          <Button
            borderRadius={"full"}
            height={"50px"}
            width={"50px"}
            colorPalette={"orange"}
            onClick={async () => {
              const firstCall = async () => {
                const data = await getDataFromAt(
                  import.meta.env.VITE_PRODUCTS_TABLE
                );
                if (data?.offset) {
                  const offset = await getDataOffset(
                    data,
                    import.meta.env.VITE_PRODUCTS_TABLE
                  );
                  setProducts(offset);
                }
              };
              firstCall();
              console.log(products);
              // setFetchingData(true)
            }}
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
                className="lucide lucide-list-restart"
              >
                <path d="M21 6H3" />
                <path d="M7 12H3" />
                <path d="M7 18H3" />
                <path d="M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14" />
                <path d="M11 10v4h4" />
              </svg>
            </Icon>
          </Button>

          <Link to={"/stats"}>
            <Button
              borderRadius={"full"}
              colorPalette={"blue"}
              variant={"subtle"}
            >
              Stats
            </Button>
          </Link>
        </Flex>

        <Link to={"/dashboard/cart"}>
        <Button
          borderRadius={"full"}
          alignSelf={"center"}
          colorPalette={"blue"}
          variant={"subtle"}
        >
          Carrito
        </Button>
          </Link>
      </Flex>
    </>
  );
};

export default Navbar;
