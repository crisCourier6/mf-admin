import React, { useState } from 'react';
import { Box, Typography, Grid, CircularProgress, Accordion, AccordionSummary, AccordionDetails} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import FoodListIcon from '../svgs/FoodListIcon';
import AccountIcon from '../svgs/AccountIcon';
import NotificationManagerIcon from '../svgs/NotificationManagerIcon';
import FoodListIcon from '../svgs/FoodListIcon';

export const Help:React.FC<{isAppBarVisible:boolean}>= ({isAppBarVisible}) => {
  const navigate = useNavigate()
  const [allDone, setAllDone] = useState(true)
  const currentUserId = window.sessionStorage.getItem("id") || window.localStorage.getItem("id")
  const currentStoreId = window.sessionStorage.getItem("s_id") || window.localStorage.getItem("s_id")
  const currentExpertId = window.sessionStorage.getItem("e_id") || window.localStorage.getItem("e_id")

  
    return (allDone
            ?<Grid container display="flex" 
                flexDirection="column" 
                justifyContent="flex-start"
                alignItems="center"
                sx={{width: "100vw", maxWidth:"500px", gap:"5px", flexWrap: "wrap", pb: 7}}
            >
                 
            <Box
            sx={{
                marginTop: isAppBarVisible? "30px":0,
                width:"95%",
            }}
            > 
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography variant="h6">Barra de navegación</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="subtitle2" textAlign={"left"}>
                        <li>
                            La barra de navegación se ubica en la parte de arriba de la pantalla.
                        </li>
                        <li>
                            El botón ubicado a la izquierda abre un menú lateral con accesos directos a distintas funciones de la aplicación.
                        </li>
                        <li>
                            El botón ubicado a la derecha abre un menú lateral donde se puede revisar el perfil de usuario, ver notificaciones y cerrar sesión.
                        </li>
                        <li>
                            El logo de EyesFood puede ser presionado para ir al menú de inicio de la aplicación.
                        </li>
                        <li>
                            La barra de navegación se esconde al desplazar la pantalla hacia abajo, y vuelve a aparecer al desplazar la pantalla hacia arriba.
                        </li>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <AccountIcon height={"24px"} width={"24px"}/>
                    <Typography variant="h6" sx={{pl:1}}>Usuarios</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="subtitle2" textAlign={"left"}>
                        <li>
                        En esta vista se puede ver una tabla con todos los usuarios registrados en EyesFood.
                        </li> 
                        <li>
                        Las filas de color narnajo representan solicitudes pendientes de nutricionistas y tiendas. En la columna de Acciones
                        se encuentran los botones para aceptar o rechazar las solicitudes.
                        </li>
                        <li>
                        Además, la columna de Acciones permite ver el perfil de un usuario, desactivar o reactivar su cuenta y eliminar su cuenta.
                        </li>
                        <li>
                        Eliminar una cuenta implica eliminar todo rastro de este usuario en la aplicación. UTILIZAR ESTA FUNCIÓN CON EXTREMO CUIDADO.
                        </li>
                        <li>
                        La barra de herramientas de la tabla permite filtrar filas en base a sus columnas y agregar nuevos usuarios.
                        </li>
                        <li>
                        Las filas también pueden ser organizadas al pinchar la flecha que aparece a la derecha del título de una columna cuando se pone el puntero sobre éste.
                        </li>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <NotificationManagerIcon height={"24px"} width={"24px"}/>
                    <Typography variant="h6" sx={{pl:1}}>Notificaciones</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="subtitle2" textAlign={"left"}>
                        <li>
                        En esta vista se puede ver una tabla con las notificaciones globales que existen en la aplicación.
                        </li> 
                        <li>
                        Las notificaciónes con fondo gris ya han sido enviadas mientras que las notificaciones con fondo verde aún no han sido envíadas.
                        </li> 
                        <li>
                        La barra de tareas de la tabla permite filtrar filas en base a sus columnas y agregar nuevas notificaciones.
                        </li>
                        <li>
                        La columna de Acciones permite editar y enviar notificaciones, y también eliminarlas. Si se elimina una notificación, esta también se
                        elimina de la lista de notificaciones de todos los usuarios que aún no la han leído o borrado. UTILIZAR ESTA FUNCIÓN CON EXTREMO CUIDADO.
                        </li>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <FoodListIcon height={"24px"} width={"24px"}/>
                    <Typography variant="h6" sx={{pl:1}}>Alimentos</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="subtitle2" textAlign={"left"}>
                        <li>
                        En esta vista se puede acceder a dos tablas: La tabla de alimentos y la tabla de aportes.
                        </li> 
                        <li>
                        La tabla de alimentos muestra los alimentos registrados localmente que han sido obtenidos de OpenFoodFacts. 
                        </li> 
                        <li>
                        La columna de Acciones permite ver la página del alimento, ver sus comentarios y ver el formulario de edición del alimento.
                        </li>
                        <li>
                            Al abrir la lista de comentarios, estos pueden ser ocultados o borrados según lo estime conveniente.
                        </li>
                        <li>
                        La tabla de aportes muestra las solicitudes de edición de alimentos que los usuarios han envíado.
                        </li>
                        <li>
                        La columna de acciones permite ver el aporte, donde se puede comparar con la información actual del alimento.
                        </li>
                        <li>
                            La vista del aporte presenta dos botones: "Aceptar" y "Rechazar". Al aceptar, la información del alimento se actualizada
                            en EyesFood y OpenFoodFacts. Al rechazar, el aporte es eliminado.
                        </li>
                        <li>
                            Los aportes evaluados se pueden eliminar, pero esto significa perder el historial de ediciones de los alimentos. UTILIZAR ESTA FUNCIÓN CON
                            EXTREMO CUIDADO.
                        </li>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <AccountIcon height={"24px"} width={"24px"}/>
                    <Typography variant="h6" sx={{pl:1}}>Mi perfil</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="subtitle2" textAlign={"left"}>
                        <li>
                        En tu perfil puedes cambiar tu nombre o contraseña.
                        </li> 
                        {
                            currentStoreId && 
                            <li>
                                También puedes modificar la información de tu tienda y acceder a tu catálogo
                            </li>
                        }
                        {
                            currentExpertId && 
                            <li>
                                También puedes modificar la información de tu perfil profesional.
                            </li>
                        }
                        {
                            !currentStoreId &&
                            <li>
                                Además dispones de accesos directos a otras funciones importantes como tus preferencias alimenticias o tus medidas personales
                            </li>
                        }
                       
                        <li>
                        El símbolo de la campana en la barra que dice "Mi perfil" te permite acceder a tus notificaciones. Si ves un círculo naranjo
                        con un número encima de la campana, significa que tienes notificaciones sin leer.
                        </li>
                        
                    </Typography>
                </AccordionDetails>
            </Accordion>
            
            </Box>
        </Grid>
        :<CircularProgress/>
    )
}