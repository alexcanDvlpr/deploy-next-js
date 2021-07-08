import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Avatar, Wrap, WrapItem, Heading, Text, Container } from "@chakra-ui/react"

export default function Home() {
  const prueba = process.env.PRUEBA_ENV || 'No llegó nada';
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="shortcut icon" href="/deploy-next-js/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Heading my={5}>Next.js Tutorial Deploy con Github Actions en Github Pages</Heading>
        <Container maxW="container.md">
          <Text mb={5} align="center" fontSize="lg">El objetivo es, crear un proyecto base de Next.js y llegar a desplegarlo en Github Pages usando un repo de Github y usar CI/CD con GIthub Actions.</Text>
          </Container>
        <Wrap>
          <WrapItem>
            <Avatar size="2xl" name="Dan Abrahmov" src="https://scontent-mad1-1.xx.fbcdn.net/v/t1.18169-9/12919651_1790398954516641_8703166132135731682_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=a9b1d2&_nc_ohc=4isL1eMrGAMAX_mBgGU&_nc_ht=scontent-mad1-1.xx&oh=4d62f58a3ad0316fef06bab052f3ef1e&oe=60ECC811" />
            <Text mt={5}>{ prueba }</Text>
          </WrapItem>
        </Wrap>
      </main>

      <footer className={styles.footer}>
        Created with 💘 by Alexcan.dvlpr
      </footer>
    </div>
  )
}