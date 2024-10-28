import React from 'react';
import { MenulateralRecursos } from "../menuLateralRecursos/menuLateralRecursos"
import "./gridDuploRecursos.css"
import { Text, InputGroup, Input, InputRightElement, Button, Box, Accordion,  AccordionItem,  AccordionButton,  AccordionPanel,  AccordionIcon,} from '@chakra-ui/react'
import { IoIosInformationCircle } from "react-icons/io";
import { BsFillFileEarmarkImageFill } from "react-icons/bs";
import { RiFileEditFill } from "react-icons/ri";
import { IoTrophy } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { FaLockOpen } from "react-icons/fa";



export function Gridduplorecursos() {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <div className="grid-duploRecursos">
      <MenulateralRecursos />
      <div className="bloco">
        <div className="btn-rotas">
        <Accordion>
          <AccordionItem my={4}>
            <AccordionButton className="custom-accordion-button">
              <Box as='span' flex= '1' className='accordion-span'>
                <IoIosInformationCircle />
                Informações do Projeto
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4} className='txt-info'>
              <Text mb='8px' >Nome do projeto:</Text>
              <InputGroup size='md' className='info-input'>
                <Input
                  type={show ? 'text' : 'password'}
                  placeholder='Enter password'
                    />
                    <InputRightElement width='4.5rem'>
                      <Button h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? <FaLock /> : <FaLockOpen />}
                      </Button>
                    </InputRightElement>
              </InputGroup>
              <Text mb='8px'>Nome da displina:</Text>
              <InputGroup size='md' className='info-input'>
                <Input
                  type={show ? 'text' : 'password'}
                  placeholder='Enter password'
                    />
                    <InputRightElement width='4.5rem'>
                      <Button h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? <FaLock /> : <FaLockOpen />}
                      </Button>
                    </InputRightElement>
              </InputGroup>
            </AccordionPanel>
          </AccordionItem>
        
          <AccordionItem my={4}>
              <AccordionButton className="custom-accordion-button">
                <Box as='span' flex='1' className='accordion-span'>
                  <BsFillFileEarmarkImageFill />
                  Editar Capa
                </Box>
                <AccordionIcon />
              </AccordionButton>
            <AccordionPanel pb={4} className='txt-info'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem my={4}>
              <AccordionButton className="custom-accordion-button">
                <Box as='span' flex='1' className='accordion-span'>
                  <RiFileEditFill />
                  Editar Conteúdo
                </Box>
                <AccordionIcon />
              </AccordionButton>
            <AccordionPanel pb={4} className='txt-info'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem my={4}>
              <AccordionButton className="custom-accordion-button">
                <Box as='span' flex='1' className='accordion-span'>
                  <IoTrophy />
                  Editar Conclusão
                </Box>
                <AccordionIcon />
              </AccordionButton>
            <AccordionPanel pb={4} className='txt-info'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        </div>
      </div>
    </div>
  )
}