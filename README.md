# Documento de Diseño - Validador CURP/RFC

Hecho por:
Jonathan Uriel Rodríguez Hernández
Uriel Alejandro Aranda Pozuelos

## Resumen

Este documento describe el diseño de un ejercicio de programación para crear una pantalla de validación de CURP (Clave Única de Registro de Población) y RFC (Registro Federal de Contribuyentes) en un lenguaje de programación de elección del desarrollador. La pantalla permitirá a los usuarios ingresar una CURP y un RFC y validarlos según ciertos criterios. La validación se realizará en tiempo real y se mostrarán mensajes de error apropiados en caso de que los datos ingresados no cumplan con los requisitos.

## Requisitos

### Interfaz de Usuario

La interfaz de usuario constará de lo siguiente:

1. Dos campos de entrada de texto: uno para la CURP y otro para el RFC.
2. Dos botones de validación individual: uno para validar la CURP y otro para validar el RFC.
3. Área de visualización de mensajes de error o éxito.

### Validación de CURP

La validación de CURP se realizará de acuerdo con los siguientes criterios:

1. La CURP debe tener exactamente 18 caracteres.
2. Los primeros cuatro caracteres deben ser letras.
3. El quinto carácter debe ser un dígito que represente el sexo.
4. El sexto y séptimo caracteres deben ser dos letras que representen el estado.
5. Los caracteres 8 al 13 deben ser dígitos que representen la fecha de nacimiento (YYMMDD).
6. Los caracteres 14 y 15 son dígitos que indican la entidad de registro.
7. El carácter 16 es una letra que indica el género.
8. Los caracteres 17 y 18 son letras que representan la primera consonante interna del primer apellido y la primera vocal interna del primer apellido, respectivamente.

### Validación de RFC

La validación de RFC se realizará de acuerdo con los siguientes criterios:

1. El RFC debe tener exactamente 12 caracteres.
2. Los primeros cuatro caracteres deben ser letras.
3. Los caracteres 5 al 10 deben ser dígitos que representen la fecha de nacimiento (YYMMDD).
4. El carácter 11 es una letra que indica el género.

### Cálculo de la Edad

La edad del titular se calculará a partir de la fecha de nacimiento proporcionada en la CURP o el RFC.

## Flujo de Trabajo

1. El usuario ingresa la CURP y el RFC en los campos de entrada de texto.
2. El usuario hace clic en el botón de validación correspondiente (CURP o RFC).
3. El sistema verifica si la CURP o el RFC cumple con los criterios de validación especificados.
4. Se muestran mensajes de error apropiados en caso de que la CURP o el RFC no cumplan con los criterios.
5. Si la CURP o el RFC son válidos, se calcula la edad del titular a partir de la fecha de nacimiento.
6. Se muestra un mensaje de éxito junto con la edad del titular.

## Tecnologías

- Lenguaje de Programación: js o ts
- Interfaz de Usuario: React, Qwick o vanilla js
- Zod para validación de datos

## Pseudocódigo

A continuación, se proporciona un pseudocódigo de alto nivel para la validación de CURP y RFC:

```pseudocode
Función ValidarCURP(CURP):
    Si la longitud de CURP no es 18:
        Mostrar mensaje de error "La CURP debe tener 18 caracteres."
        Retornar falso
    Si los primeros cuatro caracteres de CURP no son letras:
        Mostrar mensaje de error "Los primeros cuatro caracteres deben ser letras."
        Retornar falso
    # Continuar con las demás validaciones de CURP

Función ValidarRFC(RFC):
    Si la longitud de RFC no es 12:
        Mostrar mensaje de error "El RFC debe tener 12 caracteres."
        Retornar falso
    Si los primeros cuatro caracteres de RFC no son letras:
        Mostrar mensaje de error "Los primeros cuatro caracteres deben ser letras."
        Retornar falso
    # Continuar con las demás validaciones de RFC

Función CalcularEdad(fechaNacimiento):
    # Calcular la edad a partir de la fecha de nacimiento
    # Retornar la edad calculada

Función ValidarYCalcular():
    CURPIngresada = ObtenerValorCampoCURP()
    RFCIngresado = ObtenerValorCampoRFC()

    Si ValidarCURP(CURPIngresada) y ValidarRFC(RFCIngresado):
        Edad = CalcularEdad(FechaDeNacimientoDeCURPORFC)
        Mostrar mensaje de éxito "Validación exitosa. Edad del titular: Edad años."
    Sino:
        Limpiar el área de mensajes de éxito
```

## Conclusiones

Este diseño de ejercicio permitirá a los usuarios validar CURP y RFC de manera interactiva en una interfaz de usuario. El código real debe implementar las funciones de validación detalladas en el pseudocódigo, así como la lógica para mostrar mensajes de error y éxito en la interfaz de usuario. El cálculo de la edad también debe ser implementado adecuadamente.
