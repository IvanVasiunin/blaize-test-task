import { Flex } from "@chakra-ui/react";
import Dashboard from "./Dashboard/Dashboard";
import SideBar from "./SideBar/SideBar";


export default function Main() {
  return <Flex as='main'>
    <SideBar/>
    <Dashboard />
  </Flex>
}